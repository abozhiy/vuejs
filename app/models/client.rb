class Client < ApplicationRecord
  # before_action :generate_authentication_token

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  # private
  #
  # def generate_authentication_token
  #   self.authentication_token = Devise.friendly_token
  # end
end
