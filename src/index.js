import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { tasksReducer } from "./store/reducers";

export const store = createStore(tasksReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
