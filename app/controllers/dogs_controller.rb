class DogsController < ApplicationController
   
    def index 
        #pets/pet_id/dogs
        if params[:pet_id]
            find_pet
            if @pet 
                @dogs = @pet.dogs
                render json: @dogs , status: :ok
            end
        end
    end
end