import React, { useEffect, useState } from "react";
import styles from "./homePage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { createBook, getBooks } from "../models/book/slice";
import { TBook } from "../types/book";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import FormPopup from "../components/popup/FormPopup";
import BookCardWrapper from "../components/book-card/BookCardWrapper";

const HomePage: React.FC = () => {
    const [showPopup, setPopup] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { books, fetching, booksFetched } = useSelector((state: RootState) => state.booksStore);

    useEffect(() => {
        !booksFetched && dispatch(getBooks());
    }, [dispatch, booksFetched]);

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
            <BookCardWrapper books={books} fetching={fetching && !booksFetched} />
        </div>
    );
};

export default HomePage;
