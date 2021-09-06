import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { TBook } from "../../types/book";

export type BookFormProps = {
    onSubmit: (data: TBook) => void;
    initialValues?: TBook;
};

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialValues }) => {
    return (
        <Form layout="vertical" name="basic" onFinish={onSubmit} initialValues={initialValues} autoComplete="off">
            <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please input title" }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Author" name="author" rules={[{ required: true, message: "Please input author name!" }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: "Please input description!" }]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item label="Price" name="price" rules={[{ required: true, message: "Please input price!" }]}>
                <InputNumber style={{ width: "100%" }} min={100} />
            </Form.Item>

            <Form.Item
                label="Image link"
                name="image"
                rules={[{ required: true, message: "Please input image link!" }]}>
                <Input />
            </Form.Item>

            <Form.Item>
                <Button
                    style={{
                        minWidth: 120,
                        marginTop: 30,
                    }}
                    htmlType="submit"
                    type="primary">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default BookForm;
