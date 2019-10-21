class Api::V1::OrganizationsController < ActionController::Base


  def index
    scope = perform_filter(params[:filter])
    # scope = scope.order(params[:sort])
    @organizations = scope
    render status: :ok
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

  def perform_sort
    rows = params[:rows].map { |row| JSON.parse(row) }
    rows.sort_by! { |row| row[params[:sort_by]] }
    rows.reverse! if params[:desc]
    @organizations = rows
    render status: :ok
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
