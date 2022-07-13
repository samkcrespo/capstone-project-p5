class BookClubsController < ApplicationController
  
    before_action :find_bookclub, only: [:show, :destroy]
    # skip_before_action :authorize, only: [:index, :show]

    def index
        render json: BookClub.all, status: :ok
    end

    def show
        bookclub = @bookclub
        # render json: bookclub, status: :ok
         render json: bookclub, status: :ok 
    end

    def create 
        user = @current_user
        book_club = user.book_clubs.create(book_club_params)
        book_club_user = user.book_club_users.find_by(book_club_id: book_club.id)
        book_club_user.admin? === false
        book_club_user.save

        
        render json: book_club, status: :created

    end

    def destroy 
        @bookclub.destroy
        head :no_content
    end

    # def update 
    #     bookclub = BookClub.find(params[:id])
    #     bookclub.update(bookclub_params)

    #     #check if admin is changed
    #     admin_book_club_user = bookclub.book_club_users.find {|user| user.isAdmin == true }
    #     admin_id = admin_book_club_user.user_id

    #     if params[:admin_id] != admin_id
    #         admin_book_club_user.update(isAdmin: false)
    #         new_admin_book_club_user = bookclub.book_club_users.find_by(user_id: params[:admin_id])
    #         new_admin_book_club_user.update(admin?: true)
    #     end


        
    #     # delete users if needed
    #     if !params[:delete_users].empty?
    #         users = params[:delete_users].each do |user_id|
    #             bookclub_user = bookclub.book_club_users.find_by(user_id: user_id)
    #             bookclub_user.destroy
    #         end
    #     end

    #     # add users if needed
    #     if !params[:add_users].empty?
    #         params[:add_users].each do |user_id|
    #             bookclub.book_club_users.create(user_id: user_id, admin?: false)
    #         end
    #     end

    #     render json: bookclub, , status: :accepted
    # end


    # def current_book
    #     bookclub = Bookclub.find(params[:id])
    #     new_current_book = bookclub.book_club_books.find(params[:new_bookclub_book_id])
    #     old_current_book = bookclub.book_club_books.find_by(botm?: true)

    #     if old_current_book
    #         old_current_book.update(botm?: false)
    #     end

    #     new_current_book.update(botm?: true)
        
    #     render json: bookclub, status: :accepted
    # end

    private 

    def book_club_params
        params.permit(:name)
    end

    def find_bookclub 
        @bookclub = BookClub.find(params[:id])
    end

end
