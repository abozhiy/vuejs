class Staff::StaffsController < ApplicationController
  before_action :authenticate_staff_staff!

  def index
  end
end