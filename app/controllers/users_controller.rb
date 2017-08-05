class UsersController < ApplicationController
  def new
  end

  def create
  	@user = User.new(params.require(:user).permit(:name, :email, :password, :password_confirmation))
  	if @user.save
  		token = createToken(@user)
      render(json: {'id_token': token }, :status => 200)
  	else
  		render(json: { message: "Failed User Creation", errors: @user.errors}, status: 400)
  	end
  end

  private

  def payload(user)
    {
      auth_token: JWT.encode(user, nil, 'none'),
      user: {id: user.id, email: user.email}
    }
  end

  def createToken(user)
    return JWT.encode(user, nil, 'none')
  end
end
