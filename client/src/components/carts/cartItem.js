import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.image = this.props.image;
    this.desc = this.props.desc;
    this.name = this.props.name;
    this.price = this.props.price;

    this.removeCartItem = this.removeCartItem.bind(this);
  }
  removeCartItem(itemInCart) {}

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

                <button
            onClick={() => removeCartItem(itemInCart)}
            className="btn btn-danger btn"
          >
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
