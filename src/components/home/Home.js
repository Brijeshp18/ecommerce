import React ,{useState,useEffect }from 'react'
import  './home.css'
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../apiservice/Api'
function Home() {

  const [products, setProducts] = useState([])
 useEffect(() => {
   
  const fetchProducts=async()=>{
    const data= await getAllProducts()
    setProducts(data)
    //console.log(data)
  }
 fetchProducts()
 
 }, [])
 

  return (
    <div className='product-grid'>
      {products.map((product)=>(
         <div className='product' key={product.id}>
         <img src={product.image} alt='alt'/>
          <h2>{product.title}</h2>
          <p>
           <span className='price'>₹ {product.price}</span>
          </p>
          <Link to={`/product/${product.id}`}>  <button >Product Details</button></Link>
         
   
        </div>
      ))}
   
    </div>
  )
}

export default Home