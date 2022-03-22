class Api::AppointmentsController < ApplicationController

    def index 
        # render json: Appointment.all
        render json: Appointment.all_appt
    end

    def create
        appointment = Appointment.new(appointment_params)
        if (appointment.save)
            render json: appointment
        else
            render json: {errors: appointment.errors.full_messages}, status: 422
        end
    end



    def create_with_patient
        patient = Patient.find(params[:id])
        appointment = patient.appointments.new(appointment_params)
        if (appointment.save)
            render json: appointment
        else
            render json: {errors: appointment.errors.full_messages}, status: 422
        end
    end

    def create_with_doctor
        doctor = Doctor.find(params[:id])
        appointment = doctor.appointments.new(appointment_params)
        if (appointment.save)
            render json: appointment
        else
            render json: {errors: appointment.errors.full_messages}, status: 422
        end
    end


    def update
        appointment = Appointment.find(params[:id])
        if (appointment.update(appointment_params_only_des_n_time))
            render json: appointment
        else
            render json: {errors: appointment.errors.full_messages}, status: 422
        end
    end

    def destroy
        appointment = Appointment.find(params[:id])
        render json: appointment.destroy
    end

    private 


    def appointment_params
        params.require(:appointment).permit(:description, :time, :patient_id, :doctor_id)
    end

    def appointment_params_only_des_n_time
        params.require(:appointment).permit(:description, :time)
    end
end
