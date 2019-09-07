class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def start
  end

  def after_sign_in_path_for(resource)
    case resource.class.name
    when 'Staff'
      staff_staffs_path
    when 'Client'
      client_clients_path
    else
      root_path
    end
  end
end
