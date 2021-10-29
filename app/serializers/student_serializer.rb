class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username

  has_many :parent_selections
  has_many :cafeteria_menus
  belongs_to :parent

end
