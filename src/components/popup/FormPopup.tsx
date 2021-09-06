import React from "react";
import BookForm, { BookFormProps } from "../form/BookForm";
import { Modal } from "antd";

type FormPopupProps = BookFormProps & {
    title: string;
    visible?: boolean;
    onCancel: () => void;
};

const FormPopup: React.FC<FormPopupProps> = ({ title, visible, onSubmit, onCancel, initialValues }) => {
    return (
        <Modal onCancel={onCancel} title={title} visible={visible} footer={null}>
            <BookForm initialValues={initialValues} onSubmit={onSubmit} />
        </Modal>
    );
};

export default FormPopup;
