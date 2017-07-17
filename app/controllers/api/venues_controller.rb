class Api::VenuesController < ApplicationController

	def index
		@venues = Venue.all
		render(json: @venues)
	end

	def show
		begin
			@venue = Venue.find(params[:id])
			render(json: @venue)
		rescue ActiveRecord::RecordNotFound => e 
			render(json: "Not Found", :status => 404)
		end
	end

	def new
		render('venues/new.html.erb')
	end

	def create
		@venue = Venue.create(venue_params)
		if @venue.save 
			render(json: @venue)
		else
			render(json: { message: "Validation failed", errors: @venue.errors, status: 400})
		end
	end

	private

	def venue_params
		params.require(:venue).permit(:name, :location, :start_datetime, :end_datetime, :format)
	end

end
