import React from "react";
import { Link } from 'react-router-dom';
import CartItem from "./cartItem";
import { Button, Container } from "reactstrap";
import "../../styles/shipping.css";
import "../../styles/cart.css";
import ShippingForm from "./Shipping";
import Cart from "./Cart";
class PlaceOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : JSON.parse(localStorage.getItem("cart")),
            total : 0
        }
    };


    render () {
        return (
            <Container id="cartCtnr">
            <h2 id="userInfo">Hello</h2>
                {/* <User /> */}
            <h3 id="shipInfo">Shipping Information</h3>
                <ShippingForm />
            <h3 id="itemsToBuy">Purchase for Today</h3>
                <Cart />
            </Container>


        )}
}
