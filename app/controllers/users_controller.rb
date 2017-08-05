class UsersController < ApplicationController
  def new
  end

  def create
  	@user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
  	if @user.save
  		render(json: @user)
  	else
  		render(json: { message: "Failed User Creation", errors: @user.errors}, status: 400)
  	end
  end
end
