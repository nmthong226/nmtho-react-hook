import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';

function App() {
  const HandleClick = (event) => {
    console.log('>>>> Click me', event.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>NguyenMinhThong creating Website</h1>
        <input type = "text" value = "MinhThong" onClick={(event) => HandleClick(event)}/>
        <button type = "button" onClick={(event) => HandleClick(event)}>Click me</button>
      </header>
    </div>
  );
}
export default App;