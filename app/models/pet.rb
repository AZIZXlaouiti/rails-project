class Pet < ApplicationRecord
  belongs_to :user
  validates :name , presence: true , uniqueness: true
  def self.top_3_pet
    Pet.all.sort{|a,b| b.name.length <=> a.name.length}.take(3)
  end
end
