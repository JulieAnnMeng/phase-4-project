class StudentSelectionSerializer < ActiveModel::Serializer
  attributes :id
  has_one :parent_selection
  has_one :student
end
