import React from "react";
import { Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
// import Product from "../products"
// import data from "../../data/data";


class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props.product._id;
    this.image = this.props.product.image;
    this.desc = this.props.product.desc;
    this.name = this.props.product.name;
    this.price = this.props.product.price;
    this.qty = this.props.qty;
  }
  
  

  removeCartItem(itemInCart) {

      let cart = [];
      if (localStorage.getItem("cart") !== null) {
        cart = JSON.parse(localStorage.getItem
          ("cart"));
      }
      let itemIndex = -1;
      for (var i = 0; i < cart.length; i++) {
        if (parseInt(cart[i]["product"]["_id"]) === parseInt(itemInCart)) {
          itemIndex = i;
        }
      }

      if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));

      window.location.reload();
  }

  render() {
    return (
      <Container>
        <div className="cart-item">
          <Card body outline color="warning">
            <Row>
              <Col md="2">
                  <div className="cart-item-image" id="cartImg">
                    {/* <Link to={'/Product/product_id'}>  */}
                      <img
                        alt="no pic"
                        style={{ width: "75px" }}
                        src={this.image}/>
                    {/* </Link>  */}
                  </div>
                </Col>
              <Col md="4">
                <h3 className="cart-item-description">{this.desc}</h3>
                <h3 className="cart-item-name">{this.name}</h3>
              </Col>
              <Col md="2">
                <h3 className="cart-item-qty">{this.qty}</h3>
              </Col>
              <Col md="2">
                <h3 className="cart-item-price">${this.price}.00</h3>
              </Col>
              <Col md="2">
                <button onClick={() => this.removeCartItem(this.id)} className="btn btn-danger btn"
                id="deleteBtn">Delete</button>
              </Col>
          </Row>
        </Card>
        </div>
      </Container>
    );
  }
}

export default CartItem;