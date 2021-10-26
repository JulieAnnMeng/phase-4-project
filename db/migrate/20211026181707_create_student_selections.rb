class CreateStudentSelections < ActiveRecord::Migration[6.1]
  def change
    create_table :student_selections do |t|
      t.belongs_to :parent_selection, null: false, foreign_key: true
      t.belongs_to :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
