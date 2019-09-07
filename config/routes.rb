Rails.application.routes.draw do


  # devise_for :staffs, :controllers => { :sessions => "staff/sessions" }
  # devise_for :clients, :controllers => { :sessions => "client/sessions" }

  namespace :staff do
    devise_for :staffs, path: 'staffs', :controllers => { :sessions => "staff/sessions" }
    resources :staffs
  end

  namespace :client do
    devise_for :clients, path: 'clients', :controllers => { :sessions => "client/sessions" }
    resources :clients
  end


  root 'application#start'
end
