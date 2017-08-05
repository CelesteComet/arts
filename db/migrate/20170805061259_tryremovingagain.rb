class Tryremovingagain < ActiveRecord::Migration[5.1]
  def change
  	remove_index "user_id", name: "index_venues_on_user_id"
  end
end
