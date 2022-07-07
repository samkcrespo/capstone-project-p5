class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment
  has_one :book_club_book
  has_one :user
end
