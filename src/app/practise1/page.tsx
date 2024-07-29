"use client";
// pages/index.js
import React from "react";
import { Form, Input, Button } from "antd";

const RegistrationForm = () => {
  const onFinish = (values: Object) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      name="registration"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "50px" }}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input id="firstName" />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input id="lastName" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input a valid email!",
          },
        ]}
      >
        <Input id="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password id="password" />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input id="username" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" id="submit">
          Regist User
        </Button>
      </Form.Item>
    </Form>
  );
};

const Practise1 = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default Practise1;
