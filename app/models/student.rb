class Student < ApplicationRecord
  has_secure_password

  has_many :student_selections
  has_many :parent_selections, through: :student_selections
  belongs_to :parent

end
