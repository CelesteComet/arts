class Removeindex < ActiveRecord::Migration[5.1]
	def self.down
	   remove_index :venues, :user_id
	end
end
