# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_05_165448) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_club_books", force: :cascade do |t|
    t.bigint "book_id", null: false
    t.bigint "book_club_id", null: false
    t.boolean "botm?"
    t.string "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_club_id"], name: "index_book_club_books_on_book_club_id"
    t.index ["book_id"], name: "index_book_club_books_on_book_id"
  end

  create_table "book_club_users", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "book_club_id", null: false
    t.boolean "admin?"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_club_id"], name: "index_book_club_users_on_book_club_id"
    t.index ["user_id"], name: "index_book_club_users_on_user_id"
  end

  create_table "book_clubs", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "image_url"
    t.text "description"
    t.string "genres", default: [], array: true
    t.integer "pages"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "book_club_book_id", null: false
    t.bigint "user_id", null: false
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_club_book_id"], name: "index_comments_on_book_club_book_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "book_club_books", "book_clubs"
  add_foreign_key "book_club_books", "books"
  add_foreign_key "book_club_users", "book_clubs"
  add_foreign_key "book_club_users", "users"
  add_foreign_key "comments", "book_club_books"
  add_foreign_key "comments", "users"
end