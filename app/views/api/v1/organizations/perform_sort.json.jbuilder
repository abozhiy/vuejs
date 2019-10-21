json.array! @organizations do |organization|
  json.id organization['id']
  json.name organization['name']
  json.org_type organization['org_type']
  json.inn organization['inn']
  json.ogrn organization['ogrn']
  json.client_ids organization['client_ids']
end