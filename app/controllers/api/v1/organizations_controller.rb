class Api::V1::OrganizationsController < ActionController::Base


  def index
    @organizations = Organization.all
    render status: :ok
  end

  def show
    @organization = Organization.find(params[:id])
    render status: :ok
  end

  def create
    @organization = Organization.new(organization_params)

    if @organization.save
      render status: :created
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def update
    @organization = Organization.find(params[:id])

    if @organization.update(organization_params)
      render status: :ok
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @organization = Organization.find(params[:id])
    @organization.destroy
    head :ok
  end

  private

  def organization_params
    params.require(:organization).permit(:name, :org_type, :inn, :ogrn, client_ids: [])
  end
end
