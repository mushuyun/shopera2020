import React from "react";
import CartItem from "./cartItem";
import { Button } from "reactstrap";
import "../../styles/shipping.css";
import "../../styles/cart.css";
import data from "../../data/data";

const Cart = ({ }) => {
    const items = data.cart;
    return (
        <div className="container" id="cartCtnr">
           <h2>Shopping Cart</h2> 

           <div className="cart">
           <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <Button size="lg" id="cartTtlBtn" className="cartTotal">Total: $  </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cart;