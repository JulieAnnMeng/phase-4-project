class StudentSelection < ApplicationRecord
  belongs_to :parent_selection
  belongs_to :student
end
