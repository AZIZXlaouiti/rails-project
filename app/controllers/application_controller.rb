class ApplicationController < ActionController::API
  include ActionController::Cookies
  def login_user
    session[:user_id] = @user.id
  end
  def logged_in?
     !!session[:user_id]
  end
  def find_current_user
   @user =  User.find_by_id(session[:user_id])
  end
  def find_pet 
    @pet = Pet.find_by_id(params[:id])
  end
end
