class Organization < ApplicationRecord

  has_many :equipments
  has_many :client_organizations, dependent: :destroy
  has_many :clients, through: :client_organizations
end