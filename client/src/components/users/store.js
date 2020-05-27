import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
//need to import from cart and product
import { userSigninReducer, userRegisterReducer } from "./userReducers";

//const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

//const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  //productList: productListReducer,
  //productDetails: productDetailsReducer,
  //cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;