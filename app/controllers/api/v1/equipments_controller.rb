class Api::V1::EquipmentsController < ActionController::Base


  def index
    @equipments = Equipment.all
    render status: :ok
  end

  def show
    @equipment = Equipment.find(params[:id])
    render status: :ok
  end

  def create
    @equipment = Equipment.new(equipment_params)

    if @equipment.save
      render status: :created
    else
      render json: @equipment.errors, status: :unprocessable_entity
    end
  end

  def update
    @equipment = Equipment.find(params[:id])

    if @equipment.update(equipment_params)
      render status: :ok
    else
      render json: @equipment.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @equipment = Equipment.find(params[:id])
    @equipment.destroy
    head :ok
  end

  private

  def equipment_params
    params.require(:equipment).permit(:title, :equipment_type, :serial_num, :organization_id)
  end
end
