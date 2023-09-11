import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react'

function App() {
  let [name, setName] = useState('Minh Thong');

  const [address, setAddress] = useState('');

  const [ToDos, setToDos] = useState([
    {ID: 'todo1', title: 'Watching Youtube'},
    {ID: 'todo2', title: 'Coding'},
    {ID: 'todo3', title: 'Playing Game'}
  ]);

  const HandleClick = (event) => {
    if (!address)
    {
      alert('no empty input!'); 
      return;
    }
    let newTodo = {id: 'abc', title: address};
    setToDos([...ToDos, newTodo]);
    setAddress('');
  }

  const HandleOnChange = (event) => {
    setAddress(event.target.value);
  }
  //re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}'s creating Website</h1>
        <div className = "Task Container">
          {ToDos.map(ToDos => {
            return (
              <li className='Task Child' key = {ToDos.ID}> {ToDos.title} </li>
            )
          })}
        </div>
        <input type = "text" value = {address} onChange={(event) => HandleOnChange(event)}/>
        <button type = "button" onClick={(event) => HandleClick(event)}>Click me</button> 
      </header>
    </div>
  );
}
export default App;