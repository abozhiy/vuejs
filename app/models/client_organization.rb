class ClientOrganization < ApplicationRecord

  belongs_to :client
  belongs_to :organization
end