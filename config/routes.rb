Rails.application.routes.draw do
  
  namespace :api do
    get "/parent/me", to: "parents#show"
    get "/me", to: "student#show"
    post "/login", to: "session#create"
    delete "/logout", to: "session#destroy"
    resources :student_selections
    resources :parent_selections
    resources :cafeteria_menus
    resources :students
    resources :parents
  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end