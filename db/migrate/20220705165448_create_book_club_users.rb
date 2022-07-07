class CreateBookClubUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :book_club_users do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :book_club, null: false, foreign_key: true
      t.boolean :admin?

      t.timestamps
    end
  end
end
