class Student < ApplicationRecord
  has_secure_password

  belongs_to :parent
  has_many :student_selections
end
