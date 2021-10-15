Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :users do 
     resources :pets
end
get '/user/followers' , to: 'users#get_followers'

  # get '/users/:user_id/pets' , to: 'users#get_all_pets'
  # get'/cats/female', to: 'cats#get_females'

  delete '/logout', to: 'sessions#destroy'
  post'/login' , to: 'sessions#create'
  post '/signup' , to: 'users#create'
  get '/me' , to: 'users#get_current_user'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
