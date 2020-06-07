import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer, productSaveReducer, productDeleteReducer } from './productManage/crudReducers';
import { userSigninReducer, userRegisterReducer, userUpdateReducer } from './users/userReducers';
import { orderDetailsReducer, USEROrderListReducer, orderListReducer, orderDeleteReducer } from "./orderManage/orderReducers";

// const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin: { userInfo } };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  userUpdate: userUpdateReducer,
  orderDetails: orderDetailsReducer,
  USEROrderList: USEROrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;