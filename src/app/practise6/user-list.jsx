"use client";
// pages/user-list.tsx

import React from "react";
import { Table, Popconfirm, Button } from "antd";

const UserListPage = ({ users = [], onDeleteUser }) => {
  // Sample data (replace with actual user data)

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "lastName",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active) => (active ? "Yes" : "No"),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this server?"
          onConfirm={() => onDeleteUser(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="user-list-page">
      <h1>User List</h1>
      <Table dataSource={users} columns={columns} rowKey={"id"} />
    </div>
  );
};

export default UserListPage;
