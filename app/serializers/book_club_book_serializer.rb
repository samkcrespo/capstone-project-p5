class BookClubBookSerializer < ActiveModel::Serializer
  attributes :id, :botm?, :rating, :book
  belongs_to :book
  belongs_to :book_club
end
