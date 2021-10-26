class Student < ApplicationRecord
  belongs_to :parent
  has_many :student_selections
end
