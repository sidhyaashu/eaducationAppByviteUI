import React from 'react'
import './App.css'
import NavBar from './components/nav/NavBar'
import Contact from './pages/Contact.jsx/Contact'
import Course from './pages/course/Course'
import About from './pages/about/About'
import Home from './pages/home/Home'


import {
  Routes,Route, BrowserRouter
} from "react-router-dom";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course' element={<Course/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App
