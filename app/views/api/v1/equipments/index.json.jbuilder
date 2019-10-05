json.array! @equipments do |equipment|
  json.id equipment.id
  json.title equipment.title
  json.equipment_type equipment.equipment_type
  json.serial_num equipment.serial_num
  json.organization_id equipment.organization_id
end