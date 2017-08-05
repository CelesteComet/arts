class AddnewColumnToVenues < ActiveRecord::Migration[5.1]
  def change
  		add_reference :venues, :user, index: true
  end
end
