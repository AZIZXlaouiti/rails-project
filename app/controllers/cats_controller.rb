class CatsController < ApplicationController

    def index 
        #pets/pet_id/cats
        if params[:pet_id]
            find_pet
            if @pet 
                @cats = @pet.cats
                render json: @cats , status: :ok
            end
        end
    end
    def show 
        find_pet
        if @pet 
            @cat = @pet.cats.find_by_id(params[:id])
            if @cat
                render json: @cat , status: :ok
            else  
                render json: {errors:['cat not found']} , status: :not_found   
            end
        else 
            render json: {errors:['pet not found']} , status: :not_found   

        end
    end
end
