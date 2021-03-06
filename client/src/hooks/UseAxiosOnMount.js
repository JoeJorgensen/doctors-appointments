import axios from 'axios'
import { useEffect, useState } from 'react';

const UseAxiosOnMount = (url)=>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (()=>{

        getData()
    },[])

    const getData = async()=>{
        setLoading(true)
        try{
            let res = await axios.get(url)
            setData(res.data)
            setLoading(false)
        }catch (error){
            setError(error)
            setLoading(false)
        }
    }

    return { data, loading, error, setData}
}

export default UseAxiosOnMount