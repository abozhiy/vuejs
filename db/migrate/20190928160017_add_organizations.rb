class AddOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :org_type
      t.string :inn
      t.string :ogrn

      t.timestamps null: false
    end
  end
end
