class BookClub < ApplicationRecord
has_many :book_club_books
has_many :books, through: :book_club_books

has_many :book_club_users
has_many :users, through: :book_club_users

end
