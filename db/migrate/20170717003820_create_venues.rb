class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
    	t.string :name
    	t.string :location
    	t.datetime :start_datetime
    	t.datetime :end_datetime
      t.timestamps
    end
  end
end
