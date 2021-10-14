class UserSerializer < ActiveModel::Serializer
  has_many :dogs 
  has_many :cats
  attributes :id,:name 
end
