class BookClubBooksController < ApplicationController

    def index 
        render json: BookClubBook.all
    end

    def destroy 
        book_club_book = BookClubBook.find(params[:id])
        book_club_book.destroy
        head :no_content
    end

    def update
        book_club_book = BookClubBook.find(params[:id])
        book_club_book.update(book_club_book_params)

        render json: book_club_book, status: :accepted
    end

    

    private 

    def book_club_book_params 
        params.permit(:book_club_id, :book_id, :botm?, :rating)
    end
end
