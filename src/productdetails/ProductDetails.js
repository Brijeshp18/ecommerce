import React, { useEffect, useState } from "react";
import "./productdetails.css";
import { Link, useParams } from "react-router-dom";
import { getAllProductsId } from "../../src/apiservice/Api";
function ProductDetails() {
  const { id } = useParams();
  const [productdetails, setProductDetails] = useState({});
  useEffect(() => {
    const fetchApiId = async () => {
      const data = await getAllProductsId(id);
      setProductDetails(data);
    };
    fetchApiId();
  }, [id]);

  const buynowHandle=()=>{
   
    window.confirm("Thee Product Is Out-Of Stock")
  }

  return (
    <div className="container">
      <img src={productdetails.image} alt="alt" />
      <div className="info">
        <h2 className="title">{productdetails.title}</h2>
        <p className="description">{productdetails.description}</p>
        <p className="pricedetails">${productdetails.price}</p>
        <button className="cart" onClick={buynowHandle}>Buy Now</button>
        <Link to="/">
          <button className="home">Go Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
