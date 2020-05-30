import React from 'react';
import { Link } from 'react-router-dom'
import data from '../data/data';
import 'bootstrap/dist/css/bootstrap.css';


function Home(props) {
  return <ul className="products"> {
      data.products.map(product =>
        <li key={product._id}>
          <div className="products">
            <Link to={'/product/' + product._id}>
              <img className="product-image" src={product.image} alt="product"/>
            </Link>
            <div className="product-name">
              <Link to={'/product/' + product._id}>{product.name}</Link>  
            </div>
            <div className="product-desc">{product.desc}</div>
            <div className="product-brand" >{product.brand}</div>  
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div> 
          </div>
        </li>)
    }
  </ul>
}

export default Home;