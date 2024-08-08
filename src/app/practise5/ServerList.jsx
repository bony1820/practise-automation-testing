"use client";
import React from "react";
import { Table, Button, Popconfirm, message } from "antd";

const ServerList = ({ servers, onDeleteServer }) => {
  const columns = [
    { title: "Server Name", dataIndex: "serverName", key: "serverName" },
    { title: "Server IP", dataIndex: "serverIp", key: "serverIp" },
    { title: "Port", dataIndex: "port", key: "port" },
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "Password", dataIndex: "password", key: "password" },
    // Thêm các cột khác (port, userName, password) tương tự
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this server?"
          onConfirm={() => onDeleteServer(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <Table
      dataSource={servers}
      columns={columns}
      rowKey="id"
      pagination={false}
    />
  );
};

export default ServerList;
