Rails.application.routes.draw do
	# User routes
  resources :users, only: [:new, :create] 
  
	namespace :api do
	  resources :venues
	end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
