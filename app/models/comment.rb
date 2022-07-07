class Comment < ApplicationRecord
  belongs_to :book_club_book
  belongs_to :user
end
