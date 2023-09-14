import './App.css';
//import { useState, useEffect } from 'react'
//import WeatherForecast from './views/WeatherForecast'
import Home from './views/Home';
import About from './views/About';
import News from './views/News';
import Contact from './views/Contact';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}
export default App;