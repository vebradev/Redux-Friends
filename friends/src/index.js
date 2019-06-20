import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { LOGIN_SUCCESS } from "./actions/actionTypes";
import * as reducers from "./reducers/reducers";
import { BrowserRouter as Router } from "react-router-dom";

const middlewareToSaveToken = store => next => action => {
  if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", action.payload);
  }
  next(action);
};

const store = createStore(
  combineReducers(reducers),
  compose(
    applyMiddleware(thunk, middlewareToSaveToken),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
