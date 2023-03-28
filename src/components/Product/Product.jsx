import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, quantity } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Available: {quantity} pcs</p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
