class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :user_id, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :seller_id
      t.integer :cart_id
      t.string :address
      t.datetime :created_at, null: false
      t.timestamps

    end
     add_index :users, :user_id, unique: true
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true    
  end
end
