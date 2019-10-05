class Client < ApplicationRecord

  has_many :client_organizations, dependent: :destroy
  has_many :organizations, through: :client_organizations

  # before_action :generate_authentication_token

  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable

  # private
  #
  # def generate_authentication_token
  #   self.authentication_token = Devise.friendly_token
  # end
end
