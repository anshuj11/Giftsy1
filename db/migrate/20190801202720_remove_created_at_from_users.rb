class RemoveCreatedAtFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :created_at, :datetime
  end
end
