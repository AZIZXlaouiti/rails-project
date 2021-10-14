# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character(name: 'Luke', movie: movies.first)


user_1 = User.create(name:'bob Jr',password:'123') 
user_2 = User.create(name:'james',password:'123456')


user_1.cats.create(name:'Tom',breed:'russian blue',needs:'requires daily walks',location:0.5,characteristic:['Gentle', 'Playful'],gender:'male')
user_1.dogs.create(name:'Charlie',breed:'Bulldog',needs:'requires daily walks',location:0.4,characteristic:['Gentle', 'Playful'],gender:'male')

user_2.cats.create(name:'Kitty',breed:'norwegian forest ',needs:'requires daily walks',location:0.6,characteristic:['Good with kids' ,'Playful'],gender:'female')
user_2.dogs.create(name:'Mia',breed:' beagle',needs:'requires daily walks',location:0.2,characteristic:['Playful'],gender:'female')
user_1.cats.create(name:'Lucky',breed:'Ragdoll',needs:'High requires daily walks',location:0.7,characteristic:['active','Playful'],gender:'male')
user_1.cats.create(name:'Joey',breed:'Scottish Fold ',needs:'requires daily walks',location:0.6,characteristic:['Gentle', 'Playful'],gender:'male')
user_2.dogs.create(name:'Milo',breed:'norwegian forest ',needs:'requires daily walks',location:0.6,characteristic:['loves walks','Playful'],gender:'male')







puts 'Done seeding'