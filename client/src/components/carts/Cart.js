import React from "react";
import CartItem from "./cartItem";
import data from "../../data/data";

const Cart = ({ }) => {
    const items = data.cart;
    return (
        <div>
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
                        <div className="cart__total">Total: 3000 </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cart;

