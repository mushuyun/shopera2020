import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/data';

function Product(props) {

  async function addToCart(productId) {
    
    var e = document.getElementById("itemQty");

    if (false) { // user is signed in

      const body = {
        productId: productId,
        qty: parseInt(e.options[e.selectedIndex].value)
      }

      const response = await fetch("/cart", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json"
        }
      });
    } else {
      let cart = [];
      if (localStorage.getItem("cart") !== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
      } 
      let alreadyExists = false;
      for (var i = 0; i < cart.length; i++) {
        if (cart[i]["product"]["_id"] === productId) {
          alreadyExists = true;
          cart[i]["qty"] += 1;
          break;
        } 
      }
      if (!alreadyExists) {
        cart.push({"product": product, "qty": parseInt(e.options[e.selectedIndex].value)});
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    window.location.replace("/cart");
  } 



  console.log(props.match.params.id);
  const product = data.products.find(x => x._id === props.match.params.id);
  return <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    <div className="details">
      <div className="details-image">
        <img src={product.image} alt="product" ></img>
      </div>
      
      <div className="details-info">
        <ul>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>
            {product.rating} Stars ({product.numReviews} Reviews)
          </li>
          <li>
            Price: <b>${product.price}</b>
          </li>
          <li>
            Description:
            <div>
              {product.desc}
            </div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            Price: {product.price}
          </li>
          <li>
            Status: {product.status}
          </li>
          <li>
            Qty: <select id="itemQty">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </li>
          <li>
              <button className="button primary" id="atc" onClick={() => addToCart(product._id)}
              >Add to Cart</button>
          </li>
        </ul>
      </div>

    </div>

  </div>
}

export default Product;