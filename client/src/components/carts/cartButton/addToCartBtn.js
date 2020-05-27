import React from "react";
// import "./addToCartBtn.css";




const CartBtn = props => (
  <button
    onClick={props.onClick}
    className={`cart-btn ${props["data-value"]}`}
    {...props}
  />
);

export default CartBtn;
