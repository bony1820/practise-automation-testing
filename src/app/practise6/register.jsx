"use client";
import React from "react";
import { Form, Input, Switch, Select, Button, Radio } from "antd";
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
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="Last Name" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="First Name" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="Gender" name="gender" initialValue={"male"}>
          <Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Group>
        </Form.Item>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Verify Password" name="verifyPassword">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Active User" name="active">
          <Switch />
        </Form.Item>
        <Form.Item label="Role" name="role">
          <Select>
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="user">User</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
