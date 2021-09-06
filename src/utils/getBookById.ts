import { TBook } from "../types/book";

export const getBookById = (books: TBook[], id: number): TBook | undefined => {
    return books.find((book) => book.id === id);
};
