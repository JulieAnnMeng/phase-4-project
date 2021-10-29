class CafeteriaMenu < ApplicationRecord
    belongs_to :parent
    has_many :parent_selections
    has_many :students, through: :parent_selections
end