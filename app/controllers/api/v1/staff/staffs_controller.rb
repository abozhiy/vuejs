class Api::V1::Staff::StaffsController < ActionController::Base

  def index
    @staffs = Staff.all
    render status: :ok
  end

  def show
    @staff = Staff.find(params[:id])
    render status: :ok
  end

  def create
    @staff = Staff.new(staff_params)

    if @staff.save
      render status: :created
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  def update
    @staff = Staff.find(params[:id])

    if @staff.update(staff_params)
      render status: :ok
    else
      render json: @staff.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @staff = Staff.find(params[:id])
    @staff.destroy
    head :ok
  end

  def dashboard; end

  private

  def staff_params
    params.require(:staff).permit(:fullname, :email, :phone, :password)
  end
end