const Todo = (props) => {
    //const [address, setAddress] = useState('');
    // const [ToDos, setToDos] = useState([
    //   {ID: 'todo1', title: 'Watching Youtube', type: 'MT'},
    //   {ID: 'todo2', title: 'Coding', type: 'MT'},
    //   {ID: 'todo3', title: 'Playing Game', type: 'nmtho'},
    //   {ID: 'todo4', title: 'Reading Book', type: 'nmtho'}
    // ]);
  
    //**************************USE EFFECT */
    useEffect(() => {
      console.log('===> run use effect');
    }, [address])
  
    // const HandleClick = (event) => {
    //   if (!address)
    //   {
    //     alert('no empty input!'); 
    //     return;
    //   }
    //   let newTodo = {id: Math.floor((Math.random()*10000) + 1), title: address, type: 'MT'};
    //   setToDos([...ToDos, newTodo]);
    //   setAddress('');
    // }
  
    // const DeleteToDo = (id) => {
    //   let currentToDo = ToDos;
    //   currentToDo = currentToDo.filter(currentToDo => currentToDo.ID !== id);
    //   setToDos(currentToDo);
    // }
    // const HandleOnChange = (event) => {
    //   setAddress(event.target.value);
    // }
    
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