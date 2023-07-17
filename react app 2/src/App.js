import React from 'react';
import Hero from './components/home/Hero';
import {Routes,Route} from 'react-router-dom'
import Notfound from './helper/Notfound';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';


const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Hero/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Notfound/>} />
      </Routes>
    </div>
  )
}

export default App
