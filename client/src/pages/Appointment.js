import Badge from "react-bootstrap/esm/Badge";
import Card from "../components/Card";

const Appointment = ({id, description, time, patient, doctor})=>{
    return (
        <Card  >
            <h1> <Badge >Patient: {patient.name}</Badge> </h1>
            <h1> <Badge bg="success">Doctor: {doctor.name}</Badge></h1>
            <h3> <Badge bg="info">Description: {description}</Badge> </h3>
            <h3> <Badge bg="danger">Time: {time}</Badge></h3>
            {/* <h1>Id: {id}</h1> */}
             


        </Card>
    )
}

export default Appointment