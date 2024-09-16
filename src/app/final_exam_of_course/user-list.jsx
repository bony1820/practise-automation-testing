"use client";
// pages/user-list.tsx

import React, { useRef } from "react";
import { Table, Popconfirm, Button, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const UserListPage = ({ users = [], onDeleteUser }) => {
  // Sample data (replace with actual user data)
  const [modal, contextHolder] = Modal.useModal();

  const onDelete = (data) => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure to delete this port?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => onDeleteUser(data),
    });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Protocol",
      dataIndex: "protocol",
      key: "protocol",
    },
    {
      title: "Local port",
      dataIndex: "localPort",
      key: "localPort",
    },
    {
      title: "Explanation",
      dataIndex: "explanation",
      key: "explanation",
    },
    {
      title: "Whether or not it is authenticated",
      dataIndex: "isAuthenticated",
      key: "isAuthenticated",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
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
        <Button type="link" onClick={() => onDelete(record)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="user-list-page">
      <h1>Basic Port Authentication List</h1>
      <Table dataSource={users} columns={columns} rowKey={"id"} />
      {contextHolder}
    </div>
  );
};

export default UserListPage;
