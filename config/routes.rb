Rails.application.routes.draw do

  namespace :staff do
    devise_for :staffs, path: 'staffs', :controllers => { :sessions => "staff/sessions" }
    resources :staffs do
      get 'dashboard', on: :collection
    end
  end

  namespace :client do
    devise_for :clients, path: 'clients', :controllers => { :sessions => "client/sessions" }
    resources :clients do
      get 'dashboard', on: :collection
    end
  end

  root 'application#start'
  get '/staff/*slug', to: 'staff/staffs#dashboard'
  get '/client/*slug', to: 'client/clients#dashboard'

  namespace :api, defaults: { format: 'json' } do
    devise_for :clients
    namespace :v1 do
      resources :organizations
      resources :equipments
      namespace :client do
        resources :clients
      end
      namespace :staff do
        resources :staffs
      end
    end
  end
end
