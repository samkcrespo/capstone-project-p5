Rails.application.routes.draw do
  
  resources :book_club_users
  resources :comments
  resources :book_club_books
  resources :book_clubs
  resources :books
  resources :users

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get '/:id/book_clubs', to: 'users#my_book_clubs'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
