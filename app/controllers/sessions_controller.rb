class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:current_user] = user.id
      render json: user, status: :ok
      #  render json: user, include: ['book_clubs', 'book_clubs.users', 'book_clubs.book_club_books', 'book_clubs.book_club_books.book', 'book_clubs.bookclub_books.guide_questions.comments'], status: :created
    else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end

  def destroy 
    session.delete :user_id 
    head :no_content
  end




  def destroy
    session.delete :current_user
    head :no_content
  end
  
end
