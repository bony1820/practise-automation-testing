"use client";
import React, { useState } from "react";
import { Table, Button, Modal, Row, Divider } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";


const ServerTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dataSource, setDatasource] = React.useState([
    {
      key: "1",
      name: "Server 1",
      ip: "192.168.1.1",
      status: "UP",
      startTime: "2024-08-01 08:00",
      stopTime: "2024-08-01 18:00",
    },
    {
      key: "2",
      name: "Server 2",
      ip: "192.168.1.2",
      status: "DOWN",
      startTime: "2024-08-01 08:00",
      stopTime: "2024-08-01 18:00",
    },
    {
      key: "3",
      name: "Server 3",
      ip: "192.168.1.3",
      status: "UP",
      startTime: "2024-08-01 08:00",
      stopTime: "2024-08-01 18:00",
    },
    {
      key: "4",
      name: "Server 4",
      ip: "192.168.1.4",
      status: "DOWN",
      startTime: "2024-08-01 08:00",
      stopTime: "2024-08-01 18:00",
    },
    {
      key: "5",
      name: "Server 5",
      ip: "192.168.1.5",
      status: "UP",
      startTime: "2024-08-01 08:00",
      stopTime: "2024-08-01 18:00",
    },
  ]);

  const columns = [
    {
      title: "Status",
      dataIndex: "status",
      render: (status) =>
        status === "UP" ? (
          <CheckCircleOutlined style={{ color: "green" }} />
        ) : (
          <CloseCircleOutlined style={{ color: "red" }} />
        ),
    },
    { title: "Name", dataIndex: "name" },
    { title: "IP", dataIndex: "ip" },
    { title: "Start Time", dataIndex: "startTime" },
    { title: "Stop Time", dataIndex: "stopTime" },
  ];

  const onSelectChange = (key) => {
    const newSelectedRowKeys = selectedRowKeys.includes(key)
      ? selectedRowKeys.filter((k) => k !== key)
      : [...selectedRowKeys, key];
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleDelete = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Xử lý xóa các server được chọn
    setIsModalVisible(false);
    setDatasource((data) => {
      return data.filter((item) => !selectedRowKeys.includes(item?.key));
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: 20}}>
        <Row justify={"end"}>
            <Button type="primary" onClick={handleDelete} danger ghost>
                Delete
            </Button>
        </Row>
        <Divider />
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{ selectedRowKeys, onChange: setSelectedRowKeys }}
      />
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Bạn có chắc chắn muốn xóa các server đã chọn không?</p>
      </Modal>
    </div>
  );
};

export default ServerTable;
