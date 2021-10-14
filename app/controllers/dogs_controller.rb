class DogsController < ApplicationController
    def index
      #users/user_id/dogs
      if params[:user_id]
        find_pet
        if @user 
            @dogs = @user.dogs.all
            render json: @dogs , status: :ok
        else  
            render json: {errors: ['dogs_not_found']}   
        end
      end
  end


  def show
    find_pet
    if @user 
      @dog = @user.dogs.find_by_id(params[:id])
      if @dog 
          render json: @dog , status: :ok
      else 
          render json: {errors:['dog not found']} ,status: :unprocessable_entity

      end
    end
  end

  def destroy
    find_pet
    @dog = @user.dogs.find_by_id(params[:id])
    if @dog 
      @user.dogs.destroy
      render json: ['dog sucessfuly deleted'], status: :ok
    else 
      render json: {errors:"could not find dog"} , status: :bad_request
    end
  end

  def update
    find_pet
    @dog = @user.dogs.find_by_id(params[:id])
    if @dog 
        if @dog.update(dog_params)
          render json: @dog, status: :ok
        else 
          render json: { errors: @dog.errors.full_messages }, status: :unprocessable_entity
        end
    else 
      render json: {errors:"could not find dog"} , status: :bad_request
        
    end
  end



  private 
  def dog_params 
    params.permit(
      :id,
      :name ,
      :breed ,
      :needs ,
      :lodogion ,
      :characteristic,
      :gender
    )
  end
end
