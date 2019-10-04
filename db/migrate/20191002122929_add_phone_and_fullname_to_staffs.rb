class AddPhoneAndFullnameToStaffs < ActiveRecord::Migration[5.2]
  def change
    add_column :staffs, :phone, :string
    add_column :staffs, :fullname, :string
  end
end
