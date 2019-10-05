class CreateEquipments < ActiveRecord::Migration[5.2]
  def change
    create_table :equipments do |t|
      t.string :title
      t.string :equipment_type
      t.string :serial_num
      t.integer :organization_id

      t.timestamps null: false
    end
  end
end
