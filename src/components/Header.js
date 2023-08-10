import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
function Header() {
  const[showlinks,setshowlinks]=useState();
  const logoutAccount=()=>{
    localStorage.removeItem("signup");
    window.location.reload()
}

  return (
   <header className='header'>

    <div className='leftside'>     <Link to='/' style={{textDecoration:'none',color:'#fff'}}>  <h1>Techfix Store</h1> </Link>
    <div className="hiddenlinks"id={showlinks?"open":"close"}>
          <Link to="/">Home</Link>
         
          <Link to='/'>    <button className='logout-inside' onClick={logoutAccount}>Log Out</button> </Link>

        </div>
      </div>
  <div className="rightside" id={setshowlinks?"open":"close"}>  
    <button className='cart'>  <ShoppingCartIcon/>  </button>
    <Link to='/'>    <button className='logout' onClick={logoutAccount}>Log Out</button> </Link>
    <button className='toggle' onClick={()=>(setshowlinks(!showlinks))}>{showlinks?<CloseIcon/>:<ReorderIcon/>}</button>
     </div> 
    
   </header>
  )
}

export default Header