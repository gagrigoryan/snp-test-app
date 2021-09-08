import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import { createRootReducer, rootSaga } from "../models";
import { History } from "history";
import { saveState } from "../utils/localStorage";

const configStore = (history: History, initialState: any) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        middleware: [...getDefaultMiddleware(), routerMiddleware(history), sagaMiddleware],
        reducer: createRootReducer(history),
        preloadedState: initialState,
        devTools: process.env.APP_ENV !== "production",
    });

    sagaMiddleware.run(rootSaga);

    // store.subscribe(() => {
    //     saveState(store.getState());
    // });

    return store;
};

export default configStore;
