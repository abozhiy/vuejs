class Client::ClientsController < ApplicationController
  before_action :authenticate_client_client!
  protect_from_forgery with: :exception

  def index
  end

  def show
  end
end