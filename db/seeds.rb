# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_1 = User.create(name:'bob Jr',password:'123') 
user_2 = User.create(name:'james',password:'123456')

pet_1 = user_1.pets.create()
pet_2 = user_2.pets.create()


cat_1 = pet_1.cats.create(name:'Tom',breed:'russian blue',needs:'requires daily walks',location:0.5,characteristic:['Gentle', 'Playful'],sex:'male') 

cat_2 = pet_1.cats.create(name:'Kitty',breed:'norwegian forest ',needs:'requires daily walks',location:0.6,characteristic:['Good with kids' ,'Playful'],sex:'female') 
cat_3 = pet_1.cats.create(name:'Lucky',breed:'Ragdoll',needs:'High requires daily walks',location:0.7,characteristic:['active','Playful'],sex:'male') 
cat_4 = pet_2.cats.create(name:'Joey',breed:'Scottish Fold ',needs:'requires daily walks',location:0.6,characteristic:['Gentle', 'Playful'],sex:'male') 
cat_5 = pet_2.cats.create(name:'Milo',breed:'norwegian forest ',needs:'requires daily walks',location:0.6,characteristic:['loves walks','Playful'],sex:'male') 

dog_1 = pet_1.dogs.create(name:'Charlie',breed:'Bulldog',needs:'requires daily walks',location:0.4,characteristic:['Gentle', 'Playful'],sex:'male') 
dog_2 = pet_2.dogs.create(name:'Mia',breed:' beagle',needs:'requires daily walks',location:0.2,characteristic:['Playful'],sex:'female') 


puts 'Done seeding'