class BookClubUsersController < ApplicationController

  def index
      render json: BookClubUser.all, status: :ok
  end

    def create
        @book_club_user = BookClubUser.create(book_club_id: params[:book_club_id], user_id: params[:user_id])
        render json: @book_club_user
    end

  def destroy 
        @book_club_user = BookClubUser.find_by(book_club_id: params[:book_club_id], user_id: params[:user_id])
        if @book_club_user 
            @book_club_user.delete
            render json: {message: 'Left Bookclub'}
        else 
            render json: {error: 'Please try again.'}
        end
    end


end
