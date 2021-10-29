class CafeteriaMenuSerializer < ActiveModel::Serializer
  attributes :id, :meal, :item, :picture

  belongs_to :parent
  has_many :parent_selections
  has_many :students
end
