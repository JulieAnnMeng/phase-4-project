class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username
  has_one :parent
end
