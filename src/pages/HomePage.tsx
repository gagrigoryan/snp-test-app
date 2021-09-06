import React, { useEffect, useState } from "react";
import styles from "./homePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { createBook, getBooks } from "../models/book/slice";
import BookCard from "../components/book-card/BookCard";
import { TBook } from "../types/book";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import FormPopup from "../components/popup/FormPopup";

const HomePage: React.FC = () => {
    const [showPopup, setPopup] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { books } = useSelector((state: RootState) => state.booksStore);

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    useEffect(() => {
        console.log(books);
    }, [books]);

    const onSubmit = (data: TBook) => {
        dispatch(createBook(data));
        setPopup(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.actionWrapper}>
                <Button onClick={() => setPopup(true)} type="primary" icon={<PlusOutlined />}>
                    Create
                </Button>
                <FormPopup
                    title="Create book"
                    onSubmit={onSubmit}
                    onCancel={() => setPopup(false)}
                    visible={showPopup}
                />
            </div>
            {books && (
                <div className={styles.booksWrapper}>
                    {books.map((book: TBook) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomePage;
