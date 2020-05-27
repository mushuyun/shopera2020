import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = this.props._id;
    this.image = this.props.image;
    this.desc = this.props.desc;
    this.name = this.props.name;
    this.price = this.props.price;
  }
  
  removeCartItem(itemInCart) {
      var r = document.getElementById("removeItem");

      let cart = [];
      if (localStorage.getItem("cart") != null) {
        cart = JSON.parse(localStorage.getItem
          ("cart"));
      }
      let itemIndex = -1;
      for (var i = 0; i < cart.length; i++) {
        if (parseInt(cart[i]["product"]["_id"]) == parseInt(itemInCart)) {
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
      <div className="container">
        <div className="cart-item">
          <div className="card">
            <div className="row">
              <div className="col-md-2">
                <div className="cart-item-image" id="cartImg">
                  <img
                    alt="no pic"
                    style={{ width: "75px" }}
                    src={this.image}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="cart-item-description">{this.desc}</h3>
                <h3 className="cart-item-name">{this.name}</h3>
              </div>
              <div className="col-md-6">
                <h3 className="cart-item-price">${this.price}.00</h3>

                <button onClick={() => this.removeCartItem(this.id)} className="btn btn-danger btn">
            Delete
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
