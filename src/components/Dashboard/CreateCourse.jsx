import React from "react";
import { Button, Form, Input, InputNumber } from "antd";

const onFinish = (values) => {
  console.log(values);
};

const CreateCourse = () => {
  return (
    <Form
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 400,
      }}
      // validateMessages={validateMessages}
    >
      <Form.Item name="title">
        <div>
          <p>Title</p>
          <Input />
        </div>
      </Form.Item>
      <Form.Item name="imgurl">
        <div>
          <p>Image URL</p>
          <Input />
        </div>
      </Form.Item>
      <Form.Item name="description">
        <div>
          <p>Description</p>
          <Input.TextArea size="large" />
        </div>
      </Form.Item>
      <Form.Item>
        <Button
          style={{ backgroundColor: "#003A8C", borderRadius: "1px" }}
          type="primary"
          htmlType="submit"
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCourse;
