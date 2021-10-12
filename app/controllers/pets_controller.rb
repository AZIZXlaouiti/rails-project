class PetsController < ApplicationController

    def index 
        #users/:users_id/pets
        if params[:user_id]
            @user =  User.find_by_id(params[:user_id])
            if @user 
                @pet = @user.pets 
                render json: @pet , status: :ok 
            else 
             render json: {errors: 'no pets found'}
                  
            end
        end
    end
  
end

# .to_json(only: [:id, :name])