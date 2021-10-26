class Parent < ApplicationRecord
    has_many :students
    has_many :parent_selections
end
