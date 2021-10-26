Rails.application.routes.draw do
  
  resources :student_selections
  resources :parent_selections
  resources :cafeteria_menus
  resources :students
  resources :parents
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
