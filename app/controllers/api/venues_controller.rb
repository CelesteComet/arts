class Api::VenuesController < ApplicationController

	def index
		@venues = Venue.friendly.all
		render(json: @venues)
	end

	def show
		begin
			@venue = Venue.friendly.find(params[:id])
			render(json: {venue: @venue, user: @venue.user})
		rescue ActiveRecord::RecordNotFound => e 
			render(json: "Not Found", :status => 404)
		end
	end

	# Temporary view. 
	def new
		render('venues/new.html.erb')
	end

	# Temporary view.
	def create
		@venue = Venue.create(venue_params)
		if @venue.save 
			render(json: @venue)
		else
			render(json: { message: "Validation failed", errors: @venue.errors}, status: 400)
		end
	end

	# Temporary view.
	def edit
		@venue = Venue.find(params[:id])
		render('venues/edit.html.erb')
	end

  def update
  	@venue = Venue.friendly.find(params[:id])
  	if @venue.update(venue_params)
  		render(json: { message: "Successfully Updated", data: @venue })
  	else
  		render(json: { message: "Unsuccessful", errors: @venue.errors }, status: 400)
  	end
  end

  def destroy
  	@venue = Venue.find(params[:id])
  	if @venue.destroy
  		render(json: { message: "Successfully Destroyed"}, status: 200)
  	else
  		render(json: { message: "Unsuccessful", errors: @venue.errors }, status: 400)
  	end
  end

	private

	def venue_params
		params.require(:venue).permit(:name, :location, :start_datetime, :end_datetime, :format)
	end

end
