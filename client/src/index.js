import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
// import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./components/store"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));

//serviceWorker.unregister();
