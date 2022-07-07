class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :book_club_book, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :comment

      t.timestamps
    end
  end
end
