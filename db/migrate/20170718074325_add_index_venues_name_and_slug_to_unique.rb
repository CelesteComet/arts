class AddIndexVenuesNameAndSlugToUnique < ActiveRecord::Migration[5.1]
  def change
  	add_index :venues, :slug, unique: true
  	add_index :venues, :name, unique: true
  end
end
