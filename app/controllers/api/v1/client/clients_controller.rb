class Api::V1::Client::ClientsController < ActionController::Base


  def index
    clients = Client.all
    render json: clients.to_json, status: :ok
  end

  def create
    client = Client.new(client_params)

    if client.save
      render json: client.to_json, status: :ok
    else
      render json: {errors: client.errors.messages}, status: :unprocessable_entity
    end
  end

  private

  def client_params
    params.require(:client).permit(:fullname, :email, :phone, :password)
  end
end
