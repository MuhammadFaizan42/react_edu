import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="page_width">

    <header>
                <div className="logo">
                <img src={Logo} alt="Logo" />
                </div>
                <div className="nav_links">
                <ul>
                    <li>
                    <a href> Home </a>
                    </li>
                    <li>
                    <a href> About Us </a>
                    </li>
                    <li>
                    <a href> Courses </a>
                    </li>
                    <li>
                    <a href> Our Services</a>
                    </li>
                    <li>
                    <a href> Contact Us </a>
                    </li>
                    <li className="sign_button">
                    <a href> Sign In </a>
                    </li>
                </ul>
                </div>
            </header>

        </div>
   
  )
}

export default Header