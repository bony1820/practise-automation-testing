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
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Explanation",
      dataIndex: "explanation",
      key: "explanation",
    },
    {
      title: "Policy",
      dataIndex: "policy",
      key: "policy",
    },
    {
      title: "Cycle(seconds)",
      dataIndex: "timeCycle",
      key: "timeCycle",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
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
      <h1>Policy List</h1>
      <Table dataSource={users} columns={columns} rowKey={"id"} />
    </div>
  );
};

export default UserListPage;
