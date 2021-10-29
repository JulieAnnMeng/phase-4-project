Rails.application.routes.draw do
  
  namespace :api do
    get "/parent/me", to: "parents#show"
    get "/me", to: "session#show"
    get "/children/:id", to: "parents#getkids"
    get "/parent_selections/:id", to: "parent_selections#show"
    # get "/student_selections/:id", to: "student_selections#show"
    post "/login", to: "session#create"
    delete "/logout", to: "session#destroy"
    post "/signup", to: "parents#create"
    delete "/parent_selections/:id", to: "parent_selections#destroy"
    post "/add_student", to: "students#create"
    post "/add_meal", to: "cafeteria_menus#create"
    get "/all/:id/summary", to: "parents#summary"
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