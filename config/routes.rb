Rails.application.routes.draw do
  devise_for :users

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :contacts, only: [ :index, :show ]
    end
  end

  get '/contacts/:id', to: 'pages#react'
  get '/contacts', to: 'pages#react'
  get '/tours' ,to: 'pages#react'
  get '/venues', to: 'pages#react'
  root to: 'pages#react'
end
