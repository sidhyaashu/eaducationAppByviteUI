import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
        <nav>
            <div className="container nav__container">
                <a href="/"><h4>EADUCATION</h4></a>
                <ul className="nav__menu">
                    <li><NavLink to='/' >Home</NavLink></li>
                    <li><NavLink to='/about' >About</NavLink></li>
                    <li><NavLink to='/course' >Course</NavLink></li>
                    <li><NavLink to='/contact' >Contact</NavLink></li>
                </ul>
                <button id="open-menu-btn">O</button>
                <button id="close-menu-btn">C</button>
            </div>
        </nav>    
    </>
  )
}

export default NavBar
