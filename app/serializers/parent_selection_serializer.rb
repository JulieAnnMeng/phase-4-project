class ParentSelectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :cafeteria_menu
  has_one :parent
end
