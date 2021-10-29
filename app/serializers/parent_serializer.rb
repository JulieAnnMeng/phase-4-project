class ParentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :students
  has_many :students
  has_many :cafeteria_menus
  has_many :parent_selections

  # def student_menu
  #   selection = object.students.map{|student| student.student_selections}

  #   pselect = selection.map{|selection| selection.parent_selections}

  #   pselect.map{|menu| menu.cafeteria_menus}
  # end
end