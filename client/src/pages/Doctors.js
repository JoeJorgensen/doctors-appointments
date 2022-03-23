import useAxios from "axios-hooks"
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import Doctor from "../components/Doctor"
import List from "../components/List"
import StringifyJSON from "../components/StringifyJSON"
import UseAxiosOnMount from "../hooks/UseAxiosOnMount"
import Badge from 'react-bootstrap/Badge'

const Doctors = ()=>{
    const { data:doctors, loading, error} = UseAxiosOnMount('api/doctors')
    // if(loading)return <p>Loading Doctors</p>
    // if(error)return <p>ERROR loading Doctors</p>

    const renderOneDoc = (docObj)=>{
       return  <Doctor {...docObj}/>
    }

    return (

        <div>
        <AxiosContainer  title={ <Badge bg="dark">Doctors</Badge>}loading={loading} error={error}>
            {/* <h1>Doctors</h1> */}
            <h1>
               
            </h1>
      
            <List list={doctors} renderItem={renderOneDoc}/>
            {/* <StringifyJSON data={data}/> */}
        </AxiosContainer>
        </div>

    )
}

export default Doctors