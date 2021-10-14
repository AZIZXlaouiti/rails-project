class CreateCats < ActiveRecord::Migration[6.1]
  def change
    create_table :cats do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.string :breed
      t.string :needs
      t.decimal :location
      t.text :characteristic, array: true, default: []
      t.string :gender
      t.timestamps
    end
  end
end
