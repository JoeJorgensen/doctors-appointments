import StringifyJSON from "./StringifyJSON"


const List = ({list, renderItem})=>{
    const renderList = ()=>{
        if(!renderItem){
            return <StringifyJSON data={list}/>
        }

        return list.map(renderItem)
    }
    return (
        <div>
            <p>{list.length}</p>
            {renderList()}

        </div>
    )

}
export default List