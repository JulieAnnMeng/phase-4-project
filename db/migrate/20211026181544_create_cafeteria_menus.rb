class CreateCafeteriaMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :cafeteria_menus do |t|
      t.string :meal
      t.string :item
      t.string :picture
      t.belongs_to :parent, null: false, foreign_key: true
      t.timestamps
    end
  end
end
