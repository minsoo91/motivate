Rails.application.routes.draw do
  root 'static_pages#index'
  scope :api do 
  	resources :positive_quotes
  	resources :reminder_texts, only: [:create]
  end
end
