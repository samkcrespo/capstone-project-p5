class AddImageUrlToBookClubs < ActiveRecord::Migration[6.1]
  def change
    add_column :book_clubs, :image_url, :string
  end
end
