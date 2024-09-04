"use client";
import React from "react";
import { Form, Input, Switch, Select, Button, Radio, Typography } from "antd";
import { useForm } from "antd/es/form/Form";

const Group = Radio.Group;

const RegisterPage = ({ handleRegister }) => {
  const [form] = useForm();
  const onFinish = (data) => {
    if (data?.status == "disable") return;
    handleRegister(data);
    form.resetFields();
  }
  return (
    <div className="register-page">
      <h1>Add Basic Port Authentication</h1>
      <Form onFinish={onFinish} form={form}>
        <Form.Item
          label="Protocol"
          name="protocol"
          rules={[{ required: true, message: "Please select protocol!" }]}
        >
          <Select>
            <Select.Option value="admin">HTTPS</Select.Option>
            <Select.Option value="user">SSH</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Local port"
          name="localPort"
          rules={[{ required: true, message: "Please input local port!" }]}
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
          label="Whether or not it is authenticated"
          name="isAuthenticated"
          rules={[
            { required: true, message: "Whether or not it is authenticated" },
          ]}
        >
          <Select>
            <Select.Option value="admin">YES</Select.Option>
            <Select.Option value="user">NO</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Status" name="status" initialValue={"Disable"}>
          <Group>
            <Radio value="enable">Enable</Radio>
            <Radio value="disable">Disable</Radio>
          </Group>
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
