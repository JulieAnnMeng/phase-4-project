class StudentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :cafe_of_student

  has_many :parent_selections
  # has_many :cafeteria_menus
  belongs_to :parent
  def cafe_of_student
    CafeteriaMenu.where("parent_id = ?", self.object.parent_id)
  end
end
