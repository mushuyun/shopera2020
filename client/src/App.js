import React from 'react';
import { useSelector } from 'react-redux';
import './styles/home.css';
// import "./styles/shipping.css";
// import "./styles/cart.css";
import data from "./data/data";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./components/Home";
// import Order from "./components/carts/Order";
import Cart from "./components/carts/Cart";
// import Payment from "./components/carts/Payment";
import PlaceOrder from "./components/carts/PlaceOrder";
import SignIn from './components/users/SignIn';
import Register from './components/users/Register';
import Profile from './components/users/Profile';
import Shipping from "./components/carts/Shipping";
import Checkout from './components/checkouts/Checkout';
import PaypalConnection from './components/checkouts/PaypalConnect';
import { Badge } from "reactstrap";
import ProductsScreen from './components/products/productsScreen';
import HomeScreen from './components/products/homeScreen';
import ProductScreen from './components/products/productScreen';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }

  let cartCount = 0;
  if (localStorage.getItem("cart") !== null) {
    cartCount = JSON.parse(localStorage.getItem("cart")).length;
  }

  return (
<BrowserRouter>
  <div className="grid-container">
    <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Shopera</Link>
        </div>
        <div className="header-links">

        <Link to="/cart">Cart<Badge color="danger">{cartCount}</Badge></Link>
            <Link to="/signin">Sign In</Link>
       
            <div className="dropdown">
              <a href="#"  >Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className = "categories">
          <li>
            <Link to="/category/Shoes">Shoes</Link>
          </li>
          <li>
            <Link to="/category/Beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/category/Jewelry">Jewelry</Link>
          </li>
        </ul>
      </aside>

    <main className="main">
        <div className="content">
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/products" component={ProductsScreen} />
          <Route path="/cart" component={Cart} />
          {/* <Route path="/cart/:id?" component={Cart} /> */}
          <Route path="/shipping" component={Shipping} />
          {/* <Route path="/orders" component={Orders} /> */}
          {/* <Route path="/order" component={Order} /> */}
          {/* <Route path="/payment" component={Payment} /> */}
          {/* <Route path="/placeorder" component={PlaceOrder} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
          <Route path="/category/:id" component={HomeScreen} />
          <Route path="/" exact={true} component={Home} />

        </div>
      </main>
        
    <footer className="footer">
      CodingBootCamp UNC Project Team 3 All Rights Reserved!
    </footer>
  </div>
</BrowserRouter>
  );
}

export default App;
