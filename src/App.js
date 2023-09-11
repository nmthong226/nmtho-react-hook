import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react'

function App() {
  let [name, setName] = useState('Minh Thong');
  const [address, setAddress] = useState('');
  const HandleClick = (event) => {
    setName(address);
    console.log('>>>> Click me', address);
  }
  const HandleOnChange = (event) => {
    setAddress(event.target.value);
    console.log(event.target.value);
  }
  //re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}'s creating Website</h1>
        <input type = "text" value = {address} onChange={(event) => HandleOnChange(event)}/>
        <button type = "button" onClick={(event) => HandleClick(event)}>Click me</button> 
      </header>
    </div>
  );
}
export default App;