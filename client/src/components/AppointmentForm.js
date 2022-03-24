
import { useState } from "react";
import UseAxiosOnMount from "../hooks/UseAxiosOnMount"
import Card from  "../components/Card"
import StringifyJSON from "./StringifyJSON";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import List from "./List";
import Badge from "react-bootstrap/esm/Badge";

const GradeForm = (props)=>{

    const [patient_id, set_patient_id] = useState('')
    const [doctor_id, set_doctor_id] = useState('')
    const [description, setDescription] = useState('')
    const [time, setTime] = useState('')
    const navigate = useNavigate();




    const {
        data: patients,
         loading:patientsLoading, 
         error:patientsError
        } = UseAxiosOnMount('/api/patients');

        const {
            data: doctors,
             loading:doctorsLoading, 
             error:doctorsError
            } = UseAxiosOnMount('/api/doctors');


    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log({patient_id:patient_id, doctor_id:doctor_id, description, time})
        let appointment = {patient_id:patient_id, doctor_id:doctor_id, description, time}
        try { 
            let res = await axios.post(`/api/appointments`, appointment)

            console.log(res.data)
            // props.addAppointment(res.data)

            navigate('/appointments')

        }catch(err){

        }
    }

    if (patientsLoading || doctorsLoading) return <p>Loading...</p>

    return (
   <div>
       <h2>Appointment Form</h2>




        <Card>
        <form >
            <h2>
            <Badge>Patient ID:</Badge>
            </h2>
            <br/>
            <br/>

            <input value={patient_id} onChange={(e)=> set_patient_id (e.target.value)}/>
            <br/>
            <br/>
            <br/>


            <h2><Badge>Doctor ID:</Badge></h2>

            <br/>
            <br/>
            <input value={doctor_id} onChange={(e)=> set_doctor_id (e.target.value)}/>
            <br/>
            <br/>
            <br/>


            <h2><Badge>Description</Badge></h2>
            
            <br/>
            <br/>
            <input value={description} onChange={(e)=> setDescription (e.target.value)}/>
            <br/>
            <br/>
            <br/>


            <h2><Badge>Time</Badge></h2>
            
            <br/>
            <br/>
            <input value={time} onChange={(e)=> setTime (e.target.value)}/>
            <br/>
            <br/>
            <br/>


            <Button onClick={handleSubmit}>
            {/* <button> */}
                Create Appointment
                {/* </button> */}
                </Button>
 
        </form>
        </Card>

        <List  list={patients} renderItem={(t)=> <p>id:{t.id} name:{t.name}</p>}/>
        <List list={doctors} renderItem={(t)=> <p>id:{t.id} name:{t.name}</p>}/> 


   </div>
   )
}

export default GradeForm