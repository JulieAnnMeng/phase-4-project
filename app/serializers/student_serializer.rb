class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username

  has_many :student_selections
  has_many :parent_selections
  belongs_to :parent

end
