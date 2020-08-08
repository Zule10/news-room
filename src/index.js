import React from "react";
import { render } from "react-dom";
import storeFactory from "./store";
import { Provider } from "react-redux";
import App from "./components/App";

const store = storeFactory();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
