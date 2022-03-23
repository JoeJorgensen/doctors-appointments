import useAxios from "axios-hooks"
import AxiosContainer from "../components/AxiosContainer"
import Card from "../components/Card"
import StringifyJSON from "../components/StringifyJSON"

const Doctors = ()=>{
    const [{ data, loading, error}] = useAxios('api/doctors')
    if(loading)return <p>Loading Doctors</p>
    if(error)return <p>ERROR loading Doctors</p>
    return (
        <AxiosContainer title={'Doctors'} loading={loading} error={error}>
            {/* <h1>Doctors</h1> */}
            <StringifyJSON data={data}/>
        </AxiosContainer>
    )
}

export default Doctors