class DogsController < ApplicationController
  before_action    :find_pet , excpet: [:index]

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
    @dog= @user.dogs.find_by_id(params[:id])
     if @dog
       @dog.destroy
       render json: ['dog sucessfuly deleted'], status: :ok
     else 
       render json: {errors:"could not find cat"} , status: :bad_request
     end
  end

  def update
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
  def create 
    if @user 
       @pet = @user.dogs.create(dog_params)
       if @pet.save 
         render json: @pet , status: :ok
       end
    else 
      render json: {errors:['user not found']} , status: :unprocessable_entity
    end
  end


  private 
  def dog_params 
    params.permit(

      :name ,
      :breed ,
      :needs ,
      :lodogion ,
      :characteristic,
      :gender
    )
  end
end
