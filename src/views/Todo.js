
const Todo = (props) => {
    const ToDos = props.myData;
    const HandleDelete = (id) => {
        props.DeleteToDo(id)
    }
    return (
        <div className = "Task Container">
            <div>
            {props.title}
            </div>
            {ToDos.map(ToDos => {
                return (
                <div key = {ToDos.ID}> 
                    <li className='Task Child'> {ToDos.title} 
                    &nbsp; &nbsp; <span onClick={() => HandleDelete(ToDos.ID)}>x</span> </li>
                </div>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo;