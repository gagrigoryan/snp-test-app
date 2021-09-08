import React from "react";
import styles from "./bookCard.module.scss";
import { TBook } from "../../types/book";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

type BookCardWrapperProps = {
    books: TBook[];
    fetching?: boolean;
};

const BookCardWrapper: React.FC<BookCardWrapperProps> = ({ books, fetching }) => {
    return (
        <div>
            {fetching ? (
                <div className={styles.skeletonWrapper}>
                    <BookCardSkeleton />
                    <BookCardSkeleton />
                    <BookCardSkeleton />
                    <BookCardSkeleton />
                </div>
            ) : (
                <div className={styles.bookWrapper}>
                    {books.map((book: TBook) => (
                        <BookCard key={`${book.id}`} {...book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookCardWrapper;
