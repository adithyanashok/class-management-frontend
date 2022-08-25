import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar' >
        <div className="nav-wrapper">
                <Link to='/' style={{color:"inherit", textDecoration:"none"}} ><h1 className='logo' >ABC</h1></Link>
        </div>
    </div>
  )
}

export default Navbar