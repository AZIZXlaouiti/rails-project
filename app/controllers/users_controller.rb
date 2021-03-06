class UsersController < ApplicationController
    def create 
        
       @user = User.new(user_params)
       if @user.save 
          login_user
          render json: @user , status: :created 
       else 
           render json: {errors: @user.errors.full_messages}, status: :unprocessable_entity
       end
    end
    def get_current_user
        if logged_in? 
           render json:  find_current_user , status: :ok
        else  
            render json: { errors: ["There is currently no user logged in."] }, status: :bad_request    

        end
    end
    def show 
       @user = User.find_by_id(params[:id])
       if @user 
          render json: @user.to_json(only: [:id, :name])  ,status: :ok 
       else 
          render json: {errors: ['user not found']} , status: :not_found
       end
    end
    def index 
        render json: User.all.to_json(only: [:id, :name])
    end

   
    def get_followers
        if logged_in?
            @followers = User.all.select{|user| user.id != session[:user_id]}
            render json: @followers ,status: :ok 
        else  
            render json: User.all , status: :ok     
        end
    end

    private 
    def user_params 
        params.permit(
            :name ,
            :password
        )
    end
end