class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image_url
      t.text :description
      t.string :genres, array: true, default: []
      t.integer :pages

      t.timestamps
    end
  end
end
