json.array! @staffs do |staff|
  json.id staff.id
  json.email staff.email
  json.fullname staff.fullname
  json.phone staff.phone
end