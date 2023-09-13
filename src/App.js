import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState, useEffect } from 'react'
import WeatherForecast from './views/WeatherForecast'

function App() {
  let [name, setName] = useState('Minh Thong');

  const [address, setAddress] = useState('');

  const [ToDos, setToDos] = useState([
    {ID: 'todo1', title: 'Watching Youtube', type: 'MT'},
    {ID: 'todo2', title: 'Coding', type: 'MT'},
    {ID: 'todo3', title: 'Playing Game', type: 'nmtho'},
    {ID: 'todo4', title: 'Reading Book', type: 'nmtho'}
  ]);
  //**************************USE EFFECT */
  useEffect(() => {
    console.log('===> run use effect');
  }, [address])

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
        <WeatherForecast title ='Weather Forecast Table'/>
      </header>
    </div>
  );
}
export default App;