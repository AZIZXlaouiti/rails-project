class User < ApplicationRecord
    has_many :pets , dependent: :destroy
    has_many :dogs , through: :pets 
    has_many :cats , through: :pets 
    validates :name , presence: true , uniqueness: true
    has_secure_password
end
