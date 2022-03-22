Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace  :api do
    resources :doctors
    resources :appointments
    resources :patients


    post 'patients/:id/appointments', to: 'appointments#create_with_patient'
    post 'doctors/:id/appointments', to: 'appointments#create_with_doctor'


  end

  # root "articles#index"
end
