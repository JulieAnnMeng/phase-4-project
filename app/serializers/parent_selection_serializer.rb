class ParentSelectionSerializer < ActiveModel::Serializer
  attributes :id, :cafeteria_menu_id

  belongs_to :cafeteria_menu
  belongs_to :student

end
