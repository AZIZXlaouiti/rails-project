class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.belongs_to :pet, null: false, foreign_key: true
      t.string :name
      t.string :breed
      t.string :needs
      t.integer :location
      t.text :characteristic, array: true, default: []
      t.string :sex
      t.timestamps
    end
  end
end
