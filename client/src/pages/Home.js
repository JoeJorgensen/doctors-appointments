import Card from "../components/Card"
import Appointments from "./Appointments"

const Home = ()=>{
    return (
        <Card>
        <div>
            <h1>Welcome to the Appointment App!</h1>
            {/* <p>Check the appointments page to see appointments</p> */}
             <Appointments/>
        </div>
        </Card>
    )
}

export default Home