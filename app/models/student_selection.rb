class StudentSelection < ApplicationRecord
  belongs_to :parent_selection, dependent: :destroy
  belongs_to :student
end
