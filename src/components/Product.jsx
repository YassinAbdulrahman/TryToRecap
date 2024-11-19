import React from "react";
import "../product.css";
import { Link } from "react-router-dom";
function Product({product ,showButton}) {
  return (
    <>
      <div className="card" >
        <img src={product.image} className="card-img-top" alt="Go" />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.description}
          </p>
          <p>Price : {product.price}$</p>
          {!showButton ? 
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            Details
          </Link>
            : null}
        </div>
      </div>
    </>
  );
}

export default Product;
