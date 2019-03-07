import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

import "./index.css";
import App from "./App";

const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
