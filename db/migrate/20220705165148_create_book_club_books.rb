class CreateBookClubBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :book_club_books do |t|
      t.belongs_to :book, null: false, foreign_key: true
      t.belongs_to :book_club, null: false, foreign_key: true
      t.boolean :botm?
      t.string :rating

      t.timestamps
    end
  end
end
