class CreateListing < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, length: [max: 120]
      t.text :description
      t.float :price
      t.float :shipping
    end
  end
end
