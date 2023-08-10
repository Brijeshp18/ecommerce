import React ,{useState,useEffect }from 'react'
import  './home.css'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../apiservice/Api'
import Loader from '../Loader/Loader'
function Home() {

  const [products, setProducts] = useState([])
  const [page, setpage] = useState(2)

 useEffect(() => {
   
  const fetchProducts=async()=>{
    const data= await getAllProducts()
    setProducts(data)
    console.log("products",data)
  }
 fetchProducts()
 
 }, [])
 const selectPageHandler=(selectedPage)=>{
  if(selectedPage >=1 && selectedPage <= (products.length/10))
    setpage(selectedPage)
  
 
 }
 

  return (
    <div className='maindiv'>
    <div className='product-grid'>
      {products.length ?products.slice(page*10-10,page*10).map((product)=>(
         <div className='product' key={product.id}>
         <img src={product.image} alt='alt'/>
          <h2>{product.title}</h2>
          <p>
           <span className='price'>₹ {product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>  <button className='product-btn' >Product Details</button></Link>
          
         
   
        </div>
      )):<Loader/>}
   
   
    </div>   {products.length>0 && <div className='pagination'>
         <span className={page>1?"":"pagination__disable "} onClick={()=>(selectPageHandler(page-1))}>◀️</span >
        {[...Array(products.length/10)].map((_,i )=>{return  < span className={page===i+1?"pagination__selected":""} onClick={()=>(selectPageHandler(i+1)) }>{i+1}</span>})}
       
         <span className={page<products.length/10?"":"pagination__disable "} onClick={()=>(selectPageHandler(page+1))}>▶️</span>
        </div>}</div>
  )
}

export default Home