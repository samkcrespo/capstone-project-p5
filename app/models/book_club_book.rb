class BookClubBook < ApplicationRecord
  belongs_to :book
  belongs_to :book_club
  has_many :comments
end
