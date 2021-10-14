class CatsController < ApplicationController
  
    def index
      #users/user_id/cats
      if params[:user_id]
         find_pet
         if @user 
            @cats = @user.cats.all
             render json: @cats , status: :ok
         else  
            render json: {errors: ['cats_not_found']}   
         end
      end
   end
  

  def show
    find_pet
    if @user 
      @cat = @user.cats.find_by_id(params[:id])
      if @cat 
          render json: @cat , status: :ok
      else 
           render json: {errors:['cat not found']} ,status: :unprocessable_entity

      end
    end
  end

  def destroy
     find_pet
     @cat = @user.cats.find_by_id(params[:id])
     if @cat 
       @user.cats.destroy
       render json: ['cat sucessfuly deleted'], status: :ok
     else 
       render json: {errors:"could not find cat"} , status: :bad_request
     end
  end

  def update
    find_pet
    @cat = @user.cats.find_by_id(params[:id])
     if @cat 
        if @cat.update(cat_params)
          render json: @cat, status: :ok
        else 
          render json: { errors: @cat.errors.full_messages }, status: :unprocessable_entity
        end
     else 
      render json: {errors:"could not find cat"} , status: :bad_request
         
     end
  end



  private 
  def cat_params 
    params.permit(
      :id,
      :name ,
      :breed ,
      :needs ,
      :location ,
      :characteristic,
      :gender
    )
  end
end
