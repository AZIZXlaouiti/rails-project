class User < ApplicationRecord
    has_many :dogs 
    has_many :cats 
    validates :name , presence: true , uniqueness: true
    has_secure_password
end
