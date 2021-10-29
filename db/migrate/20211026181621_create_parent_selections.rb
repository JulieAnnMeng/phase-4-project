class CreateParentSelections < ActiveRecord::Migration[6.1]
  def change
    create_table :parent_selections do |t|
      t.belongs_to :cafeteria_menu, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
