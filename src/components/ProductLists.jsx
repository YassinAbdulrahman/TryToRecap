import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductLists() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [Cat, setCat] = useState([]);
  useEffect(() => {
    getAllproduct();
    getAllCat();
  }, []);

  const getAllproduct = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getAllCat = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  };
  const getCatByName = (CatName) => {
    console.log(CatName);
    fetch(`${api_url}/category/${CatName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  return (
    <>
      <h2 className="text-center p-3">Our Product</h2>

      <div className="container">
        <div className="d-flex justify-content-center lign-items-center">
          <button className="btn btn-info p-2 m-2" onClick={()=>getAllproduct()}>All</button>
          {Cat.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => getCatByName(cat)}
                className="btn btn-info p-2 m-2"
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3 py-3" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductLists;
