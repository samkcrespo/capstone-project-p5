class BookClub < ApplicationRecord
has many :book_club_books
has many :books, through :book_club_books

has many :book_club_users
has many :users, through :book_club_users

end
