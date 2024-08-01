"use client";
// pages/index.js
import React, { useState } from "react";
import { List, Menu, Dropdown, message, Divider, Space } from "antd";
import Title from "antd/es/typography/Title";
import { Table } from "antd";
import { columns, data } from "./data";
// import "antd/dist/antd.css";
import "./style.css";
import { Button } from "antd";
import { Skeleton } from "antd";
import { useEffect } from "react";

const Practise3 = () => {
  const [loading, setLoading] = useState(true);
  const showAlert = () => {
    alert("Hello world");
  };

  const showPrompt = () => {
    prompt("Please enter your message:", "");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 10 giây

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ paddingLeft: 200 }}>
      <div>
        <Title level={3}>Right-click each item to display options</Title>
        <Table
          className="table"
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        ,
      </div>
      <Divider />
      <Space size={10} />
      <div style={{ textAlign: "left" }}>
        <Button type="primary" onClick={showAlert} style={{ marginRight: 10 }}>
          Show Alert
        </Button>

        <Button type="primary" onClick={showPrompt} style={{ marginRight: 10 }}>
          Show Prompt
        </Button>

        <Button type="primary" onClick={openSupportTicketForm}>
          Show Window
        </Button>

        <div className={"container"}>
          {loading && <Skeleton active className={"skeleton"} />}
          <h1 className={"header"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.         
          </h1>
        </div>
      </div>
    </div>
  );
};

const openSupportTicketForm = () => {
  const formHtml = `
      <html>
        <head>
          <title>Support Ticket</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            label { display: block; margin-bottom: 10px; }
            input, textarea { width: 100%; padding: 8px; margin-bottom: 10px; }
            button { padding: 10px 20px; background-color: #1890ff; color: white; border: none; cursor: pointer; }
          </style>
        </head>
        <body>
          <h2>Support Ticket</h2>
          <form>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
            <button type="submit">Submit</button>
          </form>
        </body>
        <script>
          window.name = "supportTicketWindow";
        </script>
      </html>
    `;
  const newWindow = window.open("", "", "width=600,height=400");
  newWindow?.document.write(formHtml);
  newWindow?.document.close();
};

export default Practise3;
