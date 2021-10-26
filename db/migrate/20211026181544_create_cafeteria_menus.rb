class CreateCafeteriaMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :cafeteria_menus do |t|
      t.string :meal
      t.string :item
      t.string :picture

      t.timestamps
    end
  end
end
