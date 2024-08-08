"use client";
import React, { useState } from "react";
import ServerForm from "./ServerForm"; // Đường dẫn tới tệp ServerForm.js
import ServerList from "./ServerList"; // Đường dẫn tới tệp ServerList.js
import { Divider } from "antd";

const ServerManagement = () => {
  // Quản lý trạng thái danh sách server ở đây
  const [servers, setServers] = useState([
    {
      key: "1",
      serverName: "Server 1",
      serverIp: "192.168.1.1",
      port: "22",
      userName: "Taros1",
      password: "taros123",
    },
    {
      key: "2",
      serverName: "Server 2",
      serverIp: "192.168.1.2",
      port: "23",
      userName: "Lexas1",
      password: "Lexas123",
    },
  ]);

  // Xử lý logic tạo server và xóa server
  const handleCreateServer = (newServer) => {
    setServers(data => [
      ...data,
      newServer
    ])
  };

  const handleDeleteServer = (record) => {
    setServers(data => data.filter(item => item?.serverIp != record?.serverIp))
  };

  return (
    <div>
      <h1>Server Management</h1>
      <ServerForm onCreateServer={handleCreateServer} />
      <Divider />
      <ServerList servers={servers} onDeleteServer={handleDeleteServer} />
    </div>
  );
};

export default ServerManagement;
