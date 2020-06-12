import React from "react";
import { useSelector } from "react-redux";
import history from './history'
// import Cookie from "js-cookie";
import { Router } from "react-router-dom";
import { Route, Link} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/products/Product";
import ProductCrud from "./components/productManage/ProductCrud";
import orderCrud from "./components/orderManage/orderCrud";
import Order from "./components/carts/Order";
import Cart from "./components/carts/Cart";
import Payment from "./components/carts/Payment";
import PlaceOrder from "./components/carts/PlaceOrder";
import SignIn from "./components/users/SignIn";
import Register from "./components/users/Register";
import Profile from "./components/users/Profile";
import Shipping from "./components/carts/Shipping";
import { Badge } from "reactstrap";
import packageJson from "../package.json";
import "./styles/home.css";

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
      let cart = JSON.parse(localStorage.getItem("cart")).map(cartItem => cartCount += parseInt(cartItem["qty"]));
      // console.log(cartCount);
      history.push("/cart");
      
    }

  return (
<Router history={history}>
  <div className="grid-container">
    <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Shopera</Link>
        </div>
        <div className="header-links">

        <Link to="/cart">Cart<Badge color="danger">{cartCount > 0 ? cartCount : ''}</Badge></Link>
            {/* {console.log(cartCount)} */}
            <Link to="/signin">Sign In/Register</Link>
            <Link to="/profile">Profile/Logout</Link>
            <div className="dropdown">
              {/* <a href="#"  >Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/ordercrud">Orders</Link>
                  <Link to="/productcrud">Products</Link>
                </li>
              </ul> */}
              {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/ordercrud">Orders</Link>
                    <Link to="/productcrud">Products</Link>
                  </li>
                </ul>
              </div>
            )}
            </div>
        </div>
      </header>

      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
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
          <Route exact={true} path="/product/:id" component={Product} />
          <Route exact={true} path="/productcrud" component={ProductCrud} />
          <Route exact={true} path="/ordercrud" component={orderCrud} />
          <Route exact={true} path="/cart" component={Cart} />
          <Route exact={true} path="/shipping" component={Shipping} />
          <Route exact={true} path="/order/:id" component={Order} />
          <Route exact={true} path="/payment" component={Payment} />
          <Route exact={true} path="/profile" component={Profile} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/placeorder" component={PlaceOrder} />
          <Route exact={true} path="/signin" component={SignIn} />
          <Route exact={true} path="/category/:id" component={Home} />
          <Route exact={true} path="/" component={Home} />
        </div>
      </main>
        
    <footer className="footer">
      CodingBootCamp UNC Project Team 3 All Rights Reserved!&nbsp;v{packageJson.version}
    </footer>
  </div>
</Router>
  );
}

export default App;
