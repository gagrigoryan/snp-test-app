import React, { useEffect, useState } from "react";
import styles from "./bookPage.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { getBook } from "../models/book/slice";
import { getBookById } from "../utils/getBookById";
import { TBook } from "../types/book";

interface ParamsType {
    id: string;
}

const isNumeric = (value: string): boolean => {
    return /^\d+$/.test(value);
};

const BookPage: React.FC = () => {
    const { id } = useParams<ParamsType>();
    const dispatch = useDispatch();
    const { books } = useSelector((state: RootState) => state.booksStore);
    const [currentBook, setCurrentBook] = useState<TBook>();

    useEffect(() => {
        isNumeric(id) && dispatch(getBook(+id));
    }, [dispatch, id]);

    useEffect(() => {
        if (books.length > 0) {
            setCurrentBook(getBookById(books, +id));
        }
    }, [books, id]);

    return (
        <>
            {!currentBook || !isNumeric(id) ? (
                <div>Page not found</div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <img className={styles.image} src={currentBook.image} alt={currentBook.title} />
                        <div className={styles.content}>
                            <h1>{currentBook.title}</h1>
                            <h2>{currentBook.author}</h2>
                            <p>{currentBook.description}</p>
                            <p>{currentBook.price} руб.</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookPage;
