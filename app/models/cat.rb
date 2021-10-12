class Cat < ApplicationRecord
  belongs_to :pet
  # has_one :user ,through: :pet 
  validates :name , presence: true , uniqueness: true
  
end
