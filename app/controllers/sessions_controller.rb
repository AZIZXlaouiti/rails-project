class SessionsController < ApplicationController
  
    def create 
        @user  = User.find_by_name(params[:name])
        if @user &. authenticate (params[:password])
            session[:user_id] = @user.id 
            render json: @user, status: :ok
        else 
             render json: {errors: ['wrong password or user_name try again']} ,status: :unauthorized
        end
    end
    def destroy
        session.clear
        render json: { errors: ["Successfully logged out"]}, status: :ok
    end

end
