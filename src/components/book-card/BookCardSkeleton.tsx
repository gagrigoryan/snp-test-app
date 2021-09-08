import React from "react";
import styles from "./bookCard.module.scss";
import { Skeleton, Card } from "antd";

const BookCardSkeleton: React.FC = () => {
    return (
        <div className={styles.container}>
            <Card>
                <Skeleton.Input style={{ width: 220 }} active size="small" />
                <div className={styles.skeletonImage}>
                    <Skeleton.Image />
                </div>
                <Skeleton className={styles.skeleton} loading active />
            </Card>
        </div>
    );
};

export default BookCardSkeleton;
