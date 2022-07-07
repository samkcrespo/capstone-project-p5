class BookClubBookSerializer < ActiveModel::Serializer
  attributes :id, :botm?, :rating
  has_one :book
  has_one :book_club
end
