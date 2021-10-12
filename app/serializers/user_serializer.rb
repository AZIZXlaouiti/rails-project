class UserSerializer < ActiveModel::Serializer
  attributes :id , :name 
  # has_many :cats , through: :pets
  # has_many :dogs , through: :pets
end
