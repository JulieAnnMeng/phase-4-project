class CafeteriaMenuSerializer < ActiveModel::Serializer
  attributes :id, :meal, :item, :picture

  has_many :parent_selections
  has_many :parents
end
