import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data/data';

function Home(props) {
  return <ul className="products">
    {
      data.products.map(product =>
        <li>
          <div className="product">
            <Link to={'/product/' + product._id}>
              <img className="product-image" src={product.image} alt="product" />

            </Link>
            <div className="product-name">
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <button id="addToCart" onClick={(event) => props.addItem(event, "id")}>
                Add To Cart
              </button>
            <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
          </div>
        </li>)
    }
  </ul>
}

export default Home;