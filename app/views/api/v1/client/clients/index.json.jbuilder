json.array! @clients do |client|
  json.id client.id
  json.email client.email
  json.fullname client.fullname
  json.phone client.phone
end