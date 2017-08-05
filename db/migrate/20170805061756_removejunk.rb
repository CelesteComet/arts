class Removejunk < ActiveRecord::Migration[5.1]
  def change
  	remove_index "users_id", name: "index_venues_on_users_id"
  	remove_column :venues, :user_id
  	remove_column :venues, :users_id
  end
end
