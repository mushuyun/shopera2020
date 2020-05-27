import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

=======
import store from './components/users/store';
>>>>>>> 668cc3b9cb0d745bedd48c79968abc070e6c9d6e

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

//serviceWorker.unregister();
