import useAxios from "axios-hooks"
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import StringifyJSON from "../components/StringifyJSON"

const Patients = ()=>{
    const [{ data, loading, error}] = useAxios('api/patients')
    if(loading)return <p>Loading Patients</p>
    if(error)return <p>ERROR loading Patients</p>
    return (
        <AxiosContainer title={'Patients'} loading={loading} error={error}>
            {/* <h1>Patients</h1> */}
            <StringifyJSON data={data}/>
        </AxiosContainer>
    )
}

export default Patients