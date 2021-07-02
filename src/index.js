import React from "react";
import ReactDOM from "react-dom";
import "./Components/common/index.css";
import App from "./navigation/App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/redux-store";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

