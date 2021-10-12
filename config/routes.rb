Rails.application.routes.draw do

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  resources :users do 
    resources :pets , only:[:index] 
    
  end
  resources :pets , only:[:index] do
    resources :dogs , except: [:update]
    resources :cats , except: [:update]

  end

  delete '/logout', to: 'sessions#destroy'
  post'/login' , to: 'sessions#create'
  post '/signup' , to: 'users#create'
  get '/me' , to: 'users#get_current_user'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
