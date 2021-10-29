class Parent < ApplicationRecord
    has_secure_password
    has_many :students
    
    has_many :cafeteria_menus

    has_many :parent_selections, through: :cafeteria_menus
   
end
