Rails.application.routes.draw do

  namespace :staff do
    devise_for :staffs, path: 'staffs', :controllers => { :sessions => "staff/sessions" }
    resources :staffs
  end

  namespace :client do
    devise_for :clients, path: 'clients', :controllers => { :sessions => "client/sessions" }
    resources :clients
  end

  root 'application#start'
  get '/staff/*slug', to: 'staff/staffs#index'
  get '/client/*slug', to: 'client/clients#index'

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
