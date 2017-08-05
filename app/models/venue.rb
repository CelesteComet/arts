class Venue < ApplicationRecord
	#validates_presence_of(:name, :location, :start_datetime, :end_datetime)

	include FriendlyId
	friendly_id(:name, {use: :slugged})

	validates(:name, {
		length: { maximum: 140 },
		presence: true
	})

	validates(:location, {
		length: { maximum: 140 },
		presence: true
	})

	# Maybe move the format to the model concern. Expected format 2017-07-20 00:00:00
	validates(:start_datetime, {
		format: { with: /....-..-..\s..:..:../ },
		presence: true
	})

	# Maybe move the format to the model concern. Expected format 2017-07-20 00:00:00
	validates(:end_datetime, {
		format: { with: /....-..-..\s..:..:../ },
		presence: true
	})

	belongs_to :user
end
