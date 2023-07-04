import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <header className='header'>
    <Link to='/' style={{textDecoration:'none',color:'#fff'}}>  <h1>Techfix Store</h1> </Link>
   
    <Link to='/logout'>    <button>Log Out</button> </Link>
    
   </header>
  )
}

export default Header