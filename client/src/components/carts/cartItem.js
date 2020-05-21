import React from "react";
import { Link } from 'react-router-dom';
import data from '../../data/data';

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.image = this.props.image;
    this.name = this.props.name;
    this.price = this.props.price;
  
    this.removeCartItem = this.removeCartItem.bind(this);
  }
  removeCartItem(itemInCart) {

  }
  render() {
    return (
      <div className="cart-item">
        <div>
          { <ul>
            <li className="cart-item-image"><img alt="no pic" src={this.image}/></li>
            <li className="cart-item-name">{this.name}</li>
            <li className="cart-item-price">{this.price}</li>
          </ul> }
         {/* <button
            onClick={() => removeCartItem(itemInCart)}
            className="btn btn-danger btn"
          >
            Delete
          </button> */}
        </div>
      </div>
    );
  }
}

export default CartItem;
