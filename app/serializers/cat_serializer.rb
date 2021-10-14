class CatSerializer < ActiveModel::Serializer
  attributes :id,:name ,
  :breed ,
  :needs ,
  :location ,
  :characteristic,
  :gender
end
