class User < ApplicationRecord
   has_many :pets
    validates :name , presence: true , uniqueness: true
    has_secure_password
end
