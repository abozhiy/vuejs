class Staff::StaffsController < ApplicationController
  layout 'staff'

  before_action :authenticate_staff_staff!
  protect_from_forgery with: :exception

  def index
  end

  def show
  end
end