class User < ApplicationRecord
has_secure_password
has_many :comments
has_many :book_club_users
has_many :book_clubs, through: :book_club_users

validates :username, :email, :password, presence: true
end
