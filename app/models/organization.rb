class Organization < ApplicationRecord
  include PgSearch::Model

  has_many :equipments
  has_many :client_organizations, dependent: :destroy
  has_many :clients, through: :client_organizations

  pg_search_scope :search, against: [:name, :inn, :ogrn],
                  using: {
                    tsearch: { prefix: true }
                  }

  # after_save :broadcast

  def broadcast
    ActionCable.server.broadcast('organizations', { organization: self })
  end
end