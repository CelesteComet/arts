require 'jwt'

class SessionsController < ApplicationController
  def new
  end

  def create
  	# authenticate the user
  	@user = User.find_by_credentials( params[:user][:email], params[:user][:password] )

  	if @user 
      # create a JWT token for the user and send it back.
      token = createToken(@user)
	  	render(json: {'id_token': token }, :status => 200)
	  else
	  	render(json: "Invalid Credentials", :status => 401)
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
