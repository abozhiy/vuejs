class Api::V1::OrganizationsController < ActionController::Base


  def index
    table_params = JSON.parse(params[:table])
    scope = perform_filter(table_params['filter'])
    data = OrganizationTableHandling.new(table_params, scope).response!
    render json: data
  end

  def show
    @organization = Organization.find(params[:id])
    render status: :ok
  end

  def create
    @organization = Organization.new(organization_params)

    if @organization.save
      @organization.broadcast
      render status: :created
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def update
    @organization = Organization.find(params[:id])

    if @organization.update(organization_params)
      @organization.broadcast
      render status: :ok
    else
      render json: @organization.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @organization = Organization.find(params[:id])
    if @organization.destroy
      @organization.broadcast
      head :ok
    end
  end

  private

  def perform_filter(filter)
    return Organization.all if filter.blank?
    Organization.search(filter)
  end

  def organization_params
    params.require(:organization).permit(:name, :org_type, :inn, :ogrn, client_ids: [])
  end
end
