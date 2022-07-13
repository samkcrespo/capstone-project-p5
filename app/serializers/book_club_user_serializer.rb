class BookClubUserSerializer < ActiveModel::Serializer
  attributes :id, :admin?
  has_one :user
  has_one :book_club
end
