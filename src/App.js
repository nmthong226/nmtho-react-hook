import './App.css';
//import { useState, useEffect } from 'react'
//import WeatherForecast from './views/WeatherForecast'
import Home from './views/Home';
import About from './views/About';
import News from './views/News';
import Contact from './views/Contact';
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<News />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:id" element={<DetailBlog />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}
export default App;