# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Doctor.create(name:'DR Brown', profession:'Ear Doctor')
Doctor.create(name:'DR Reynolds', profession:'Eye Doctor')
Doctor.create(name:'DR Cannon', profession:'Family Doctor')
Doctor.create(name:'DR Pepper', profession:'Physician')
Doctor.create(name:'DR Pine', profession:'Physical Therapy')
Doctor.create(name:'DR Grey', profession:'Chiropracter')


Patient.create(name:'Jared')
Patient.create(name: 'Luke')
Patient.create(name: 'Carson')
Patient.create(name: 'Andrew')
Patient.create(name: 'Charles')
Patient.create(name: 'Max')
Patient.create(name: 'Isaac')
Patient.create(name: 'Will')


Appointment.create(time: 440, description:'Check up', patient_id: 1, doctor_id: 1)
Appointment.create(time: 440, description:'Eye appointment', patient_id: 1, doctor_id: 2)
Appointment.create(time: 440, description:'Back Pain', patient_id: 4, doctor_id: 6)
Appointment.create(time: 440, description:'New Perscription', patient_id: 5, doctor_id: 3)








# Grade.create(patient_id: patient.id, doctor_id: doctor.id, time: i, descriptio)e










