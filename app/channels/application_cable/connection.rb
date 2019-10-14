module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_staff_staff

    def connect
      self.current_staff_staff = find_verified_staff
    end

    private

    def find_verified_staff
      (current_staff_staff = env['warden'].user) ? current_staff_staff : reject_unauthorized_connection
    end
  end
end