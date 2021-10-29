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

ActiveRecord::Schema.define(version: 2021_10_26_181621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cafeteria_menus", force: :cascade do |t|
    t.string "meal"
    t.string "item"
    t.string "picture"
    t.bigint "parent_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["parent_id"], name: "index_cafeteria_menus_on_parent_id"
  end

  create_table "parent_selections", force: :cascade do |t|
    t.bigint "cafeteria_menu_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cafeteria_menu_id"], name: "index_parent_selections_on_cafeteria_menu_id"
    t.index ["student_id"], name: "index_parent_selections_on_student_id"
  end

  create_table "parents", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.bigint "parent_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["parent_id"], name: "index_students_on_parent_id"
  end

  add_foreign_key "cafeteria_menus", "parents"
  add_foreign_key "parent_selections", "cafeteria_menus"
  add_foreign_key "parent_selections", "students"
  add_foreign_key "students", "parents"
end
