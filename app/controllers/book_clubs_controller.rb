class BookClubsController < ApplicationController
  
    before_action :find_bookclub, only: [:show, :destroy]
    # skip_before_action :authorize, only: [:index, :show]

    def index 
        bookclubs = Bookclub.all 
        render json: bookclubs, status: :ok
    end

    def show
        bookclub = @bookclub
           render json: bookclub, status: :ok
        # render json: bookclub, include:  ['users', 'bookclub_books', 'bookclub_books.book', 'bookclub_books.goals', 'bookclub_books.guide_questions', 'bookclub_books.guide_questions.comments'], status: :ok 
    end

    def create 
        user = @current_user
        bookclub = user.book_clubs.create(book_club_params)
        bookclub_user = user.book_club_users.find_by(book_club_id: book_club.id)
        book_club_user.admin? = true
        book_club_user.save

        
        # render json: bookclub, include:  ['users', 'bookclub_books', 'bookclub_books.book', 'bookclub_books.goals', 'bookclub_books.guide_questions', 'bookclub_books.guide_questions.comments'], status: :created
        render json: bookclub, status: :created

    end

    def destroy 
        @bookclub.destroy
        head :no_content
    end

    # def update 
    #     bookclub = Bookclub.find(params[:id])
    #     bookclub.update(bookclub_params)

    #     #check if admin is changed
    #     admin_bookclub_user = bookclub.bookclub_users.find {|user| user.isAdmin == true }
    #     admin_id = admin_bookclub_user.user_id

    #     if params[:admin_id] != admin_id
    #         admin_bookclub_user.update(isAdmin: false)
    #         new_admin_bookclub_user = bookclub.bookclub_users.find_by(user_id: params[:admin_id])
    #         new_admin_bookclub_user.update(isAdmin: true)
    #     end


        
    #     # delete users if needed
    #     if !params[:delete_users].empty?
    #         users = params[:delete_users].each do |user_id|
    #             bookclub_user = bookclub.bookclub_users.find_by(user_id: user_id)
    #             bookclub_user.destroy
    #         end
    #     end

    #     # add users if needed
    #     if !params[:add_users].empty?
    #         params[:add_users].each do |user_id|
    #             bookclub.bookclub_users.create(user_id: user_id, isAdmin: false)
    #         end
    #     end

    #     render json: bookclub, include: ['users', 'bookclub_books', 'bookclub_books.book', 'bookclub_books.goals', 'bookclub_books.guide_questions', 'bookclub_books.guide_questions.comments'], status: :accepted
    # end


    # def current_book
    #     bookclub = Bookclub.find(params[:id])
    #     new_current_book = bookclub.book_club_books.find(params[:new_bookclub_book_id])
    #     old_current_book = bookclub.book_club_books.find_by(botm?: true)

    #     if old_current_book
    #         old_current_book.update(botm?: false)
    #     end

    #     new_current_book.update(botm?: true)
        
    #     render json: bookclub, include: ['users', 'bookclub_books', 'bookclub_books.book', 'bookclub_books.goals', 'bookclub_books.guide_questions', 'bookclub_books.guide_questions.comments'], status: :accepted
    # end

    private 

    def bookclub_params
        params.permit(:name)
    end

    def find_bookclub 
        @bookclub = Bookclub.find(params[:id])
    end

end
