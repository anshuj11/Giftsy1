class Api::SessionsController < ApplicationController
  

  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
  
    # Flash errors, if any.
    # Render :new if invalid credentials (give the user another chance to login)
    if @user.nil?
      render json:['Invalid username or password.']
    else
    # Log them in and redirect them if we find them
      
      sign_in(@user)
      render "api/users/show"
    end

  end

  def destroy
    sign_out
    # redirect to login page
    render json:{}
  end
  
end