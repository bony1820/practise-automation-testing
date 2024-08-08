"use client";
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";

const ServerForm = ({ onCreateServer }) => {
  const [form] = Form.useForm();

  const handleCreateServer = async (values) => {
    // Gửi dữ liệu lên server hoặc xử lý logic tại đây
    onCreateServer(values);
    message.success("Tạo server thành công!");
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={handleCreateServer} style={{width: 500, marginLeft: 100}}>
      <Form.Item name="serverName" label="Server Name">
        <Input placeholder="Enter server name"/>
      </Form.Item>
      <Form.Item name="serverIp" label="Server IP">
        <Input placeholder="Enter server IP" />
      </Form.Item>
      <Form.Item name="port" label="Port">
        <Input placeholder="Enter port"/>
      </Form.Item>
      <Form.Item name="userName" label="User Name">
        <Input placeholder="Enter username" />
      </Form.Item>
      <Form.Item name="password" label="Password">
        <Input placeholder="Enter password" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Create Server
      </Button>
    </Form>
  );
};

export default ServerForm;
