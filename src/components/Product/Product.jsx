import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { name, img, seller, price, quantity } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <h2>{name}</h2>
        <h3>Price: {price}</h3>
        <p>Manufacturer: {seller}</p>
        <p>Available: {quantity} pcs</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-cart"
      >
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
