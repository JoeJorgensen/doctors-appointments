import Card from "../components/Card";

const Appointment = ({id, description, time, patient, doctor, patient_id, doctor_id})=>{
    return (
        <Card  >
            <h1>Patient: {patient.name} </h1>
            <h1>Doctor: {doctor.name}</h1>
            <h1>Description: {description}</h1>
            <h1>Time: {time}</h1>
            <h1>Id: {id}</h1>
             


        </Card>
    )
}

export default Appointment