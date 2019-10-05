json.array! @clients do |client|
  json.id client.id
  json.email client.email
  json.fullname client.fullname
  json.phone client.phone
  json.organization_ids client.organizations.try(:ids)
end