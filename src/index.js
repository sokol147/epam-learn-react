import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./js/App";
import "./style.scss";

import configureStore from "./js/store";

const rootElement = document.getElementById("root");

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
