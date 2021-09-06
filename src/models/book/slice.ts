import { TBook } from "../../types/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BookState = {
    books: TBook[];
    fetching: boolean;
    failed: boolean;
};

const initialState: BookState = {
    books: [],
    fetching: false,
    failed: false,
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBooks: (state) => {
            state.fetching = true;
        },
        getBooksSuccess: (state, { payload }: PayloadAction<TBook[]>) => {
            state.fetching = false;
            state.books = payload;
        },
        createBook: (state, action: PayloadAction<TBook>) => {
            state.fetching = true;
        },
        createBookSuccess: (state, { payload }: PayloadAction<TBook>) => {
            state.fetching = false;
        },
        updateBook: (state, action: PayloadAction<TBook>) => {
            state.fetching = true;
        },
        updateBookSuccess: (state) => {
            state.fetching = false;
        },
        deleteBook: (state, actions: PayloadAction<number>) => {
            state.fetching = true;
        },
        deleteBookSuccess: (state) => {
            state.fetching = false;
        },
        getBook: (state, action: PayloadAction<number>) => {
            state.fetching = true;
        },
        getBookSuccess: (state, { payload }: PayloadAction<TBook>) => {
            state.fetching = false;
            state.books = [...state.books, payload];
        },
    },
});

export const {
    getBooks,
    getBooksSuccess,
    getBook,
    getBookSuccess,
    updateBook,
    updateBookSuccess,
    createBook,
    createBookSuccess,
    deleteBook,
    deleteBookSuccess,
} = bookSlice.actions;
export default bookSlice.reducer;
