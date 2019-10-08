class Organization < ApplicationRecord
  include PgSearch::Model

  has_many :equipments
  has_many :client_organizations, dependent: :destroy
  has_many :clients, through: :client_organizations

  pg_search_scope :search, against: [:name, :inn, :ogrn]
end