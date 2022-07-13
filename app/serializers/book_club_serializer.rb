class BookClubSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :book_club_books, :book_club_users
  # has_many :users
  # has_many :book_club_books
end
