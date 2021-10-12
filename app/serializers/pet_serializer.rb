class PetSerializer < ActiveModel::Serializer
  # attributes :id 
  has_many :cats
  has_many :dogs
 
end
