# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character(name: 'Luke', movie: movies.first)


user_1 = User.create(name:'bob Jr',password:'123') 
user_2 = User.create(name:'james',password:'123456')


user_1.pets.create(name:'Tom',breed:'russian blue',needs:'requires daily walks',characteristic:'Playful',gender:'male',pet_type:"cat")
user_1.pets.create(name:'Charlie',breed:'Bulldog',needs:'requires daily walks',characteristic:'Gentle',gender:'male',pet_type:'dog')

user_2.pets.create(name:'Kitty',breed:'norwegian forest ',needs:'requires daily walks',characteristic:'Good with kids',gender:'female',pet_type:'cat')
user_2.pets.create(name:'Mia',breed:' beagle',needs:'requires daily walks',characteristic:'Playful',gender:'female',pet_type:'dog')
user_1.pets.create(name:'Lucky',breed:'Ragdoll',needs:'High requires daily walks',characteristic:'active',gender:'male',pet_type:'cat')


user_1.pets.create(name:'Joey',breed:'Scottish Fold ',needs:'requires daily walks',characteristic:'Gentle',gender:'male',pet_type:'cat')
user_2.pets.create(name:'Milo',breed:'norwegian forest ',needs:'requires daily baths',characteristic:'loves walks',gender:'male',pet_type:'dog')






puts 'Done seeding'