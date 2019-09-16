class AddPhoneAndFullnameToClients < ActiveRecord::Migration[5.2]
  def change
    add_column :clients, :phone, :string
    add_column :clients, :fullname, :string
  end
end
