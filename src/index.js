// this is the file where I am going to connnect my React application to index.html file

import React from "react";
import ReactDOM from "react-dom";

// Provider keeps track of that store which is the global state which allows me to access that store from anywhere inside of the app
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from './reducers';
import App from './App';
import './index.css';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
