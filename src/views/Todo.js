
const Todo = (props) => {
    const ToDos = props.myData;
    return (
        <div className = "Task Container">
          {ToDos.map(ToDos => {
            return (
              <li className='Task Child' key = {ToDos.ID}> {ToDos.title} </li>
            )
          })}
        </div>
    )
}

export default Todo;