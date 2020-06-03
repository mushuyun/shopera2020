import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
//need to import from cart
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from "./userReducers";
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from '../products/productReducer';
//const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

//const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  //cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;