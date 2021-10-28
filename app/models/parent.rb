class Parent < ApplicationRecord
    has_secure_password

    has_many :students
    has_many :parent_selections, dependent: :destroy
end
