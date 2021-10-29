class Student < ApplicationRecord
  has_secure_password

  has_many :parent_selections
  has_many :cafeteria_menus, through: :parent_selections
  belongs_to :parent

end
