class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :breed
      t.string :needs
      t.string :characteristic
      t.string :gender
      t.string :pet_type
      t.timestamps
    end
  end
end
