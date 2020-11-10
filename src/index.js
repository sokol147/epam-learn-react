import React from "react";
import { hydrate } from 'react-dom';
import { Provider } from "react-redux";

import App from "./js/App";
import "./style.scss";

import configureStore from "./js/store";

const rootElement = document.getElementById("root");

const store = configureStore(window.PRELOADED_STATE);

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
