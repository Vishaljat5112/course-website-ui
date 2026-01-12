import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./pages/Home";
import About from './pages/About';
import Courses from "./pages/Courses";
import Elements from './pages/Elements';
import News from './pages/News';
import Contact from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/elements' element={<Elements/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/contact' element={<Contact/>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App;
