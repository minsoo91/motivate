Rails.application.routes.draw do
  root 'static_pages#index'
  resources :users
  resource :session, only: [:create, :new, :destroy]
  scope :api do 
  	resources :positive_quotes
  	resources :reminder_texts, only: [:create]
  end
end
