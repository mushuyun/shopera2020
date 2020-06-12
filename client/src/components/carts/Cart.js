import React from "react";
import CartItem from "./cartItem";
import { Button, Container } from "reactstrap";
import "../../styles/shipping.css";
import "../../styles/cart.css";
import Cookie from "js-cookie";
import history from "../../history";


class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items : localStorage.getItem("cart") === null ? [] : JSON.parse(localStorage.getItem("cart")),
            total : 0,
            show: this.props.show === undefined ? true : this.props.show
        }
    };

    userSignedIn() {
        if (Cookie.getJSON("userInfo") === undefined || Cookie.getJSON("userInfo") === null) {
            console.log(this.props);
            history.push("/signin");
            history.go();
        } else {
            console.log(this.props);
            history.push("/placeorder");
            history.go();
        }     

     }
    
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
                                        <CartItem key={item.product._id} {...item} />
                                    ))}
                                </div>
                            )}
                            {!this.state.items.length && (
                                <div className="alert alert-warning" style={{ backgroundColor: "primary", fontSize: 16, textAlign: "center"}}>Cart is empty</div>
                            )}
                            {this.state.show === true && (
                                <Button className="button text-center" size="lg" onClick={() => this.userSignedIn()} id="placeOrderBtn">Place Order</Button>                         
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