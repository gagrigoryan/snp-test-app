import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { ConnectedRouter } from "connected-react-router";
import "antd/dist/antd.css";
import { Router } from "react-router-dom";

const history = createBrowserHistory();
const store = configureStore(history, {});

export type RootState = ReturnType<typeof store.getState>;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router history={history}>
                    <App />
                </Router>
            </ConnectedRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
