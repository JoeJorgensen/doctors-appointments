Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace  :api do
    resources :doctors
    resources :appointments
    resources :patients
  end

  # root "articles#index"
end
