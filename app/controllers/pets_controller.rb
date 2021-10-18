class PetsController < ApplicationController
     
  def index
    @pets = @user.pets.all 
    render json: @pets , status: :ok
  end

  def show
    find_pet
    render json: @pet ,status: :ok 
  end

  
  def destroy
    find_pet
    if @pet 
       @pet.destroy 
       render json: ['pet succesfully deleted'] ,status: :ok
    else 
       render json: {errors: ['pet not found']} , status: :not_found
    end
  end

  def create
    find_current_user
    @pet = @user.pets.new(pet_params)
    if @pet.save  
       render json: @pet ,status: :created 
    else 
        render json: {errors:  ['this name is taken'] } ,status: :unprocessable_entity
    end
  end

  def update
    find_pet
    if @pet.update(pet_params)
      render json: @pet, status: :ok
    else 
      render json: { errors: @pet.errors.full_messages }, status: :unprocessable_entity
    end
  end
  def top_3_pets
      render json: Pet.top_3_pet ,status: :ok
  end

  private 

  def pet_params
    params.permit(
      :name ,
      :breed ,
      :pet_type,
      :gender,
      :characteristic,
      :needs
    )
  end

end
