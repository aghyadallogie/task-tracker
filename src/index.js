import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";
import { allReducers } from "./store/reducers/allReducers";

const myStore = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
