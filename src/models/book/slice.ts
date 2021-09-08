import { TBook } from "../../types/book";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateBookList } from "../../utils/updateBookList";

export type BookState = {
    books: TBook[];
    fetching: boolean;
    booksFetched: boolean;
    failed: boolean;
};

const initialState: BookState = {
    books: [],
    booksFetched: false,
    fetching: false,
    failed: false,
};

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBooks: (state) => {
            state.fetching = true;
            state.booksFetched = false;
        },
        getBooksSuccess: (state, { payload }: PayloadAction<TBook[]>) => {
            state.fetching = false;
            state.booksFetched = true;
            state.books = payload;
        },
        createBook: (state, action: PayloadAction<TBook>) => {
            state.fetching = true;
        },
        createBookSuccess: (state, { payload }: PayloadAction<TBook>) => {
            state.fetching = false;
            state.books = [...state.books, payload];
        },
        updateBook: (state, action: PayloadAction<TBook>) => {
            state.fetching = true;
        },
        updateBookSuccess: (state, { payload }: PayloadAction<TBook>) => {
            state.fetching = false;
            state.books = updateBookList(state.books, payload);
        },
        deleteBook: (state, actions: PayloadAction<number>) => {
            state.fetching = true;
        },
        deleteBookSuccess: (state, { payload }: PayloadAction<number>) => {
            state.fetching = false;
            state.books = state.books.filter((book) => book.id !== payload);
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
