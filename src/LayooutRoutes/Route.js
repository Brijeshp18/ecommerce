import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Footer from  '../components/Footer'
import Home from '../components/home/Home'
import Logout from '../components/logout/Logout';
import ProductDetails from '../productdetails/ProductDetails';
function RouteLayout() {
  return (
   <>
    <Router>
       <Header/>
       <Routes >
       <Route path="/" element={<Home/>} />
       <Route path="/logout" element={<Logout/>} />
       <Route path="/product/:id" element={<ProductDetails/>} />
        
        
        
        
        </Routes> 
        <Footer/>   
    </Router> 
   
   
   
   </>
  )
}

export default RouteLayout