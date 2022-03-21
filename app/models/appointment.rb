class Appointment < ApplicationRecord
  belongs_to :patient
  belongs_to :doctor


def self.all_appt

        appointments = self.all
        appointments.map do |appointment|

        {id: appointment.id, description: appointment.description, patient: appointment.patient, doctor: appointment.doctor}
    end
  end
end
