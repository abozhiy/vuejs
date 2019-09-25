class Api::V1::Client::ClientsController < ActionController::Base


  def index
    @clients = Client.all
    render status: :ok
  end

  def create
    @client = Client.new(client_params)

    if @client.save
      render status: :created
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  private

  def client_params
    params.require(:client).permit(:fullname, :email, :phone, :password)
  end
end
