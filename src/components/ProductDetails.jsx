import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product';

function ProductDetails() {

    const [product , setProduct] = useState([]);
    const params = useParams();
    console.log(params);

    const api_url = "https://fakestoreapi.com/products";
    
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((data)=>setProduct(data))
    },[])
  return (
    <div>
        <Product product={product} showButton={false}/>
    </div>
  )
}

export default ProductDetails