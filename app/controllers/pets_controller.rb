class PetsController < ApplicationController
     
  def index
    @pets = @user.pets.all 
    render json: @pets , status: :ok
  end

  def show
    @pet = Pet.find_by_id(params[:id])
    render json: @pet ,status: :ok 
  end

  
  def destroy
    @pet = Pet.find_by_id(params[:id])
    if @pet 
       @pet.destroy 
       render json: ['pet succesfully deleted'] ,status: :ok
    else 
       render json: {errors: ['pet not found']} , status: :not_found
    end
  end

  def create
    find_pet
    @pet = @user.pets.new(pet_params)
    if @pet.save  
       render json: @pet ,status: :created 
    else 
        render json: {errors: @pet.errors.full_messages } ,status: :unprocessable_entity
    end
  end

  def update
    @pet = Pet.find_by_id(params[:id])
    if @pet.update(pet_params)
      render json: @pet, status: :ok
    else 
      render json: { errors: @pet.errors.full_messages }, status: :unprocessable_entity
    end
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
