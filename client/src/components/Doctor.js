import Card from "../components/Card";
import Badge from 'react-bootstrap/Badge'

const Doctor = ({name, profession})=>{
    return (
        <Card  >

            <h1>  <Badge pill bg="info">{name}</Badge> </h1>
            <h2>  <Badge pill bg="success">{profession}</Badge> </h2>

            {/* <h1>Id: {patient_id}</h1> */}
             


        </Card>
    )
}

export default Doctor