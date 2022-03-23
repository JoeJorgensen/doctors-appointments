import Card from "../components/Card";
import Badge from 'react-bootstrap/Badge'
const Patient = ({name})=>{
    return (
        <Card  >
            <h1>
            <Badge pill bg="info">{name}</Badge> 
            </h1>

            {/* <h1>Id: {patient_id}</h1> */}
             


        </Card>
    )
}

export default Patient