class DogSerializer < ActiveModel::Serializer
  attributes :id,:name ,
  :breed ,
  :needs ,
  :location ,
  :characteristic,
  :sex
  # belongs_to :pet
end
