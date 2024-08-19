"use client";
import React from "react";
import { Form, Input, Switch, Select, Button, Radio, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const Group = Radio.Group;

const RegisterPage = ({ handleRegister }) => {
  const [form] = useForm();
  const onFinish = (data) => {
    handleRegister(data);
    form.resetFields();
  }
  return (
    <div className="register-page">
      <h1>Add Collection Policy</h1>
      <Form onFinish={onFinish} form={form}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Explanation"
          name="explanation"
          rules={[{ required: true, message: "Please input explanation!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Policy to copy"
          name="policy"
          rules={[{ required: true, message: "Please input policy!" }]}
        >
          <Select>
            <Select.Option value="admin">Default policy</Select.Option>
            <Select.Option value="user">Custom policy 01</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Config collection cycle(seconds)"
          name="timeCycle"
          rules={[
            {
              required: true,
              message: "Please input collection cycle(seconds)!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tag"
          name="tag"
          rules={[{ required: true, message: "Please input tag!" }]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
