import { AnyAction } from "@reduxjs/toolkit";
import { takeLatest, all, put, call } from "redux-saga/effects";
import { deleteBookById, fetchBookById, fetchBooks, postBook, updateBookById } from "../../api/book";
import { TBook } from "../../types/book";

import {
    createBook,
    createBookSuccess,
    deleteBook,
    deleteBookSuccess,
    getBook,
    getBooks,
    getBooksSuccess,
    getBookSuccess,
    updateBook,
    updateBookSuccess,
} from "./slice";

function* fetchBooksSaga() {
    try {
        const books: TBook[] = yield call(fetchBooks);
        yield put({
            type: getBooksSuccess.type,
            payload: books,
        });
    } catch (error) {
        console.error(error);
    }
}

function* fetchBookSaga({ payload }: AnyAction) {
    try {
        const book: TBook = yield call(fetchBookById, payload);
        yield put({
            type: getBookSuccess.type,
            payload: book,
        });
    } catch (error) {
        console.error(error);
    }
}

function* postBookSaga({ payload }: AnyAction) {
    try {
        const book: TBook = yield call(postBook, payload);
        yield put({
            type: createBookSuccess.type,
            payload: book,
        });
        yield call(fetchBooksSaga);
    } catch (error) {
        console.error(error);
    }
}

function* updateBookSaga({ payload }: AnyAction) {
    try {
        yield call(updateBookById, payload.id, payload);
        yield put({
            type: updateBookSuccess.type,
        });
        yield call(fetchBooksSaga);
    } catch (error) {
        console.error(error);
    }
}

function* deleteBookSaga({ payload }: AnyAction) {
    try {
        yield call(deleteBookById, payload);
        yield put({
            type: deleteBookSuccess.type,
        });
        yield call(fetchBooksSaga);
    } catch (error) {
        console.error(error);
    }
}

const booksSagas = function* () {
    yield all([takeLatest(getBooks.type, fetchBooksSaga)]);
    yield all([takeLatest(getBook.type, fetchBookSaga)]);
    yield all([takeLatest(createBook.type, postBookSaga)]);
    yield all([takeLatest(updateBook.type, updateBookSaga)]);
    yield all([takeLatest(deleteBook.type, deleteBookSaga)]);
};

export default booksSagas;
