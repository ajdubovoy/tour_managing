Rails.application.routes.draw do
  devise_for :users
  get '/contacts', to: 'pages#react'
  get '/tours' ,to: 'pages#react'
  get '/venues', to: 'pages#react'
  root to: 'pages#react'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
