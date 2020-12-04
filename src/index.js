import {} from "dotenv/config";
import React from "react";
import ReactDOM from "react-dom";
import "./app.less";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactGA.initialize("G-N75C322SL8"); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
