import { connectRouter } from "connected-react-router";
import { all } from "redux-saga/effects";
import { History } from "history";

import booksReducer from "./book/slice";
import booksSagas from "./book/sagas";

export const createRootReducer = (history: History) => ({
    router: connectRouter(history),
    booksStore: booksReducer,
});

export const rootSaga = function* () {
    yield all([booksSagas()]);
};
