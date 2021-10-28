class StudentSelection < ApplicationRecord
  belongs_to :parent_selection
  belongs_to :student

  has_many :cafeteria_menus

end
