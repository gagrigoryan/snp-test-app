import { TBook } from "../types/book";
import { apiRequest } from "./apiRequest";

export const fetchBooks = async (): Promise<TBook[]> =>
    apiRequest({
        path: "books",
        method: "GET",
    });

export const postBook = async (body: TBook): Promise<TBook> =>
    apiRequest({
        path: "books",
        method: "POST",
        body,
    });

export const fetchBookById = async (id: number): Promise<TBook> =>
    apiRequest({
        path: `books/${id}`,
        method: "GET",
    });

export const updateBookById = async (id: number, body: TBook): Promise<TBook> =>
    apiRequest({
        method: "PUT",
        path: `books/${id}`,
        body,
    });

export const deleteBookById = async (id: number) =>
    apiRequest({
        method: "DELETE",
        path: `books/${id}`,
    });
