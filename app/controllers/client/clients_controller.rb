class Client::ClientsController < ApplicationController
  before_action :authenticate_client_client!

  def index
  end

  def show
  end
end