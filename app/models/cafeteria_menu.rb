class CafeteriaMenu < ApplicationRecord
    has_many :parent_selections
    has_many :parents, through: :parent_selections
end