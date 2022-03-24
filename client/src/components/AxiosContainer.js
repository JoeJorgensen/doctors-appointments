import useAxios from 'axios-hooks'
import Card from './Card'
import Spinner from 'react-bootstrap/Spinner'
// This component is where we are handle like loading/Error UI
// const Users = (props)=>{
    const AxiosContainer = ({title,loading, error, children})=>{

    const renderBody = ()=>{
        if(loading)
        return (
            // <p style={{color:'teal'}}>Loading...</p>

    <div>
 <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner> 
</div>
)

        if(error)return <p>Error</p>
         return children
    }
    return (
        <div style={{textAlign: 'center', margin: '10px', padding: '10px'}}>
           <h1>{title}</h1>
           {renderBody()}
        </div>
    )
}

export default AxiosContainer