class Pet < ApplicationRecord
  belongs_to :user
  has_many :cats  , dependent: :destroy
  has_many :dogs , dependent: :destroy
 
end
