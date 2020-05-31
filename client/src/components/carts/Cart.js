import React from "react";
import { Link } from 'react-router-dom';
import CartItem from "./cartItem";
import { Button, Container } from "reactstrap";
import "../../styles/shipping.css";
import "../../styles/cart.css";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : JSON.parse(localStorage.getItem("cart")),
            total : 0
        }
    };
    
    
    componentDidMount() {
        let total = 0;
        for (var i = 0; i < this.state.items.length; i++) {
            total += parseInt(this.state.items[i]["qty"]) * this.state.items[i]["product"]["price"];
        }

        this.setState({"total": total});
    }

    render () {
        return (
            <Container id="cartCtnr">
            <h2>Shopping Cart</h2> 

            <div className="cart">
            <div className="panel panel-default">
                        <div className="panel-body">
                            {this.state.items.length > 0 && (
                                <div className="cart__body">
                                    {this.state.items.map(item => (
                                        <CartItem key={item.product._id} {...item.product} />
                                    ))}
                                </div>
                            )}
                            <Link to="/SignIn" size="lg" id="placeOrderBtn" className="button text-center" >Place Order</Link>

                            {this.state.items.length === 0 && (
                                <div className="alert alert-info">Cart is empty</div>
                            )}
                            <Button size="lg" id="cartTtlBtn" className="cartTotal" >Total: ${this.state.total} </Button>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}


export default Cart;