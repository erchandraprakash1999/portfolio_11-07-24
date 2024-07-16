import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Skills } from './Skills';
import { Education } from './Education';
import { Navbar } from './Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='skills' element={<Skills />}></Route>
        <Route path='education' element={<Education />}></Route>
      </Routes>
    </>
  )
}

export default App
