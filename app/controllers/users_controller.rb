class UsersController < ApplicationController

  before_action :find_user, only: [:update, :destroy]

  def index
    render json: User.all
  end

  def show
    current_user = User.find(session[:current_user])
    render json: current_user, include: ['book_clubs', 'book_clubs.users', 'book_clubs.book_club_books', 'book_clubs.book_club_books.book', 'book_clubs.book_club_books.comments']
  end

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    end 
  end

  def destroy
    @user.destroy
    head :no_content
  end

  def update
    @user.update
    render json: @user, status: :accepted
  end

  private

  def find_user
      @user = User.find(params[:id])
  end

  def user_params
      params.permit(:first_name, :last_name, :username, :email,  :password, :password_confirmation, :book_clubs)
  end
end
