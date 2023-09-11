import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react'
import Todo from './views/Todo.js';

function App() {
  let [name, setName] = useState('Minh Thong');

  const [address, setAddress] = useState('');

  const [ToDos, setToDos] = useState([
    {ID: 'todo1', title: 'Watching Youtube', type: 'MT'},
    {ID: 'todo2', title: 'Coding', type: 'MT'},
    {ID: 'todo3', title: 'Playing Game', type: 'nmtho'},
    {ID: 'todo4', title: 'Reading Book', type: 'nmtho'}
  ]);

  const HandleClick = (event) => {
    if (!address)
    {
      alert('no empty input!'); 
      return;
    }
    let newTodo = {id: Math.floor((Math.random()*10000) + 1), title: address, type: 'MT'};
    setToDos([...ToDos, newTodo]);
    setAddress('');
  }

  const DeleteToDo = (id) => {
    let currentToDo = ToDos;
    currentToDo = currentToDo.filter(currentToDo => currentToDo.ID !== id);
    setToDos(currentToDo);
  }
  const HandleOnChange = (event) => {
    setAddress(event.target.value);
  }
  //re-render
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}'s creating Website</h1>
        <Todo myData = {ToDos} title = "All todos" DeleteToDo = {DeleteToDo} />
        <Todo myData = {ToDos.filter(item => item.type === "MT")} title = "MT Todo" DeleteToDo = {DeleteToDo} />
        <input type = "text" value = {address} onChange={(event) => HandleOnChange(event)}/>
        <button type = "button" onClick={(event) => HandleClick(event)}>Click me</button> 
      </header>
    </div>
  );
}
export default App;