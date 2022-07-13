class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :username
  belongs_to :user
  belongs_to :book_club_book

  def username
      user = User.find(self.object.user_id)
    "#{user.first_name} #{user.last_name}"
  end

end
