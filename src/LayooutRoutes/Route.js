import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Footer from  '../components/Footer'
import Home from '../components/home/Home'
import Logout from '../components/logout/Logout';
import ProductDetails from '../productdetails/ProductDetails';
import  Logup from '../components/Login/Logup'
function RouteLayout() {
  return (
   <>
    <Router>
       <Header/>
       <Routes >
       <Route path="/" element={<Logup/>} />
       <Route path="/ecommerces" element={<Logup/>} />
  
       <Route path="/product/:id" element={<ProductDetails/>} />
        
        
        
        
        </Routes> 
        <Footer/>   
    </Router> 
   
   
   
   </>
  )
}

export default RouteLayout