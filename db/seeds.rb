# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



bruce_user = User.create(name: "Bruce Wong", email: "brucewong21@gmail.com")
bruce_user.password=('brucespassword')
bruce_user.save

alice_user = User.create(name: "Alice Wu", email: "alicewu720@gmail.com")
alice_user.password=('alicespassword')
alice_user.save

sally_user = User.create(name: "Sally Wong", email: "sally@gmail.com")
sally_user.password=('sallyspassword')
sally_user.save

puts "Created 3 Users"

locations = ['Taipei 101', 'Taipei Main Station', 'Taipei Zoo', 'Shilin Nightmarket', 'Jiantan', 'Dingpu Station', 'Nangkang Exhibition Center', 'Wanhua District', 'Raohe Nightmarket', 'Hsinchu']
names = ['Jazz', 'Figure Skating', 'Magic Show', 'Art Exhibit', 'Food Exhibit', 'Fashion Show', 'Wine Festival', 'Science Exhibit', 'Bun Tasting', 'Mooncake Festival']

10.times do |n|
	Venue.create!(
		name: names[n],
		location: locations[n],
		start_datetime: "2017-07-20 00:00:00",
		end_datetime: "2017-08-01 00:00:00",
		user: bruce_user
	)
end

# Venue.create(name: "BBQ", location: "Hsinchu", start_datetime: "2017-07-20 00:00:00", end_datetime: "2017-08-01 00:00:00")

puts "Created 10 Venues"