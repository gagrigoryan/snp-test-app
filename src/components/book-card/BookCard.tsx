import React, { useState } from "react";
import styles from "./bookCard.module.scss";
import { TBook } from "../../types/book";
import { Card } from "antd";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import FormPopup from "../popup/FormPopup";
import { useDispatch } from "react-redux";
import { deleteBook, updateBook } from "../../models/book/slice";

type BookCardProps = TBook & {
    isLoading?: boolean;
    className?: string;
};

const { Meta } = Card;

const BookCard: React.FC<BookCardProps> = ({ id, title, description, author, price, image, className }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [popup, setPopup] = useState<boolean>(false);

    const onEditClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        setPopup(true);
    };

    const onDeleteClick = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation();
        dispatch(deleteBook(id));
    };

    const onCardClick = () => {
        history.push(`book/${id}`);
    };

    const onSubmit = (data: TBook) => {
        dispatch(
            updateBook({
                ...data,
                id,
            })
        );
        setPopup(false);
    };

    return (
        <div className={clsx(styles.container, className)}>
            <Card
                cover={
                    <div className={styles.image}>
                        <img alt={title} src={image} />
                    </div>
                }
                onClick={onCardClick}
                actions={[
                    <EditOutlined onClick={onEditClick} key="edit" />,
                    <DeleteOutlined onClick={onDeleteClick} key="delete" />,
                ]}
                hoverable
                title={author}
                extra={<a href="">{price} руб.</a>}>
                <Meta title={title} description={`${description}`} />
            </Card>
            <FormPopup
                initialValues={{
                    id,
                    title,
                    author,
                    description,
                    price,
                    image,
                }}
                title="Edit book"
                onSubmit={onSubmit}
                onCancel={() => setPopup(false)}
                visible={popup}
            />
        </div>
    );
};

export default BookCard;
