import { TBook } from "../types/book";

export const updateBookList = (books: TBook[], currentBook: TBook): TBook[] => {
    return books.map((book) => {
        return book.id === currentBook.id ? currentBook : book;
    });
};
