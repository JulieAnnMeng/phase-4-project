class Parent < ApplicationRecord
    has_secure_password

    has_many :parent_selections
    has_many :cafeteria_menus, through: :parent_selections
    has_many :students
    has_many :student_selections, through: :students
end
