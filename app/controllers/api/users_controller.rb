class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
    end

    def index
        @users = User.all;
    end

    def create
    @user = User.new(user_params)

        if @user.save
            sign_in(@user)
            render :show
        else
            flash.now[:errors] = @user.errors.full_messages
            render :new
        end
    end
  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
