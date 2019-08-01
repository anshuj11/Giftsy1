class RemoveUpdatedAtFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :updated_at, :datetime
  end
end
