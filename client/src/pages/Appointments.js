import List from "../components/List";
import UseAxiosOnMount from "../hooks/UseAxiosOnMount"
import AxiosContainer from "../components/AxiosContainer";
import Appointment from "./Appointment";
import AppointmentForm from "../components/AppointmentForm";

const Appointments = ()=>{

    const {data:appointments, loading, error, setData} = UseAxiosOnMount('/api/appointments');



    const renderOneAppt = (apptObj)=>{
        return <Appointment {...apptObj}/>
    }


    // const addAppointment = (appointment)=>{
    //         setData([appointment, ...appointments])
    // }
    return (
        
        <div>
        {/* <AppointmentForm addAppointment={addAppointment}/> */}

        <AxiosContainer title={'Appointments'} loading={loading} error={error} >
            <List  list={appointments} renderItem={renderOneAppt}/>
        </AxiosContainer>
        </div>
    )
}

export default Appointments