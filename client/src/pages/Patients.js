import useAxios from "axios-hooks"
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import Patient from "../components/Patient"
import StringifyJSON from "../components/StringifyJSON"
import List from "../components/List"
import UseAxiosOnMount from "../hooks/UseAxiosOnMount"
import Badge from "react-bootstrap/esm/Badge"

const Patients = ()=>{
    const { data:patients, loading, error} = UseAxiosOnMount('api/patients')
    // if(loading)return <p>Loading Patients</p>
    // if(error)return <p>ERROR loading Patients</p>

    const renderOnePatient=(patObj)=>{
       return  <Patient {...patObj}/>
    }

   
    
    return (
        <div style={{textAlign: 'center', margin: '10px', padding: '10px'}}>

        <AxiosContainer title={<Badge bg="dark">Patients</Badge>}loading={ loading} error={error}>
            {/* <h1>Patients</h1> */}
            <h1>
                
            </h1>

            <List list={patients} renderItem={renderOnePatient}/>

            {/* <StringifyJSON data={data}/> */}
        </AxiosContainer>
        </div>
    )
}

export default Patients