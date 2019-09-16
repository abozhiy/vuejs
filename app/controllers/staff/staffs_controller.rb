class Staff::StaffsController < ApplicationController
  before_action :authenticate_staff_staff!
  protect_from_forgery with: :exception

  def index
  end

  def show
  end
end