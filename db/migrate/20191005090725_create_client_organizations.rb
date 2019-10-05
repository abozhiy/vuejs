class CreateClientOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :client_organizations do |t|
      t.integer :client_id
      t.integer :organization_id

      t.timestamps null: false
    end
  end
end
