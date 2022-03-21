class Api::AppointmentsController < ApplicationController

    def index 
        # render json: Appointment.all
        render json: Appointment.all_appt
    end

    


    private 


    def set_appointment

    end
end
