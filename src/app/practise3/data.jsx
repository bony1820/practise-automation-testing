"use client";
import React from "react";
import { Menu, Dropdown, message } from "antd";

const Item = Menu.Item;
const menu = (value) => (
  <Menu>
    {/* <Item>
      <Icon type="user" />
      {value}
    </Item> */}
    <Item onClick={() => handleMenuClick("Like it")}>
      {/* <Icon type="heart-o" /> */}
      Like it
    </Item>
    <Item onClick={() => handleMenuClick("Bookmark")}>
      {/* <Icon type="star-o" /> */}
      Bookmark
    </Item>
  </Menu>
);

const handleMenuClick = (info) => {
  message.info(info)
};

const render = (value) => (
  <Dropdown overlay={menu(value)} trigger={[`contextMenu`]}>
    <div>{value}</div>
  </Dropdown>
);

export const columns = [
  { title: `Name`, dataIndex: `name`, render },
  { title: `Age`, dataIndex: `age`, render },
  { title: `Address`, dataIndex: `address`, render },
];

export const data = [
  {
    key: `1`,
    name: `John Brown`,
    age: 32,
    address: `New York No. 1 Lake Park`,
  },
  {
    key: `2`,
    name: `Jim Green`,
    age: 42,
    address: `London No. 1 Lake Park`,
  },
  {
    key: `3`,
    name: `Joe Black`,
    age: 32,
    address: `Sidney No. 1 Lake Park`,
  },
  {
    key: `4`,
    name: `Jim Red`,
    age: 32,
    address: `London No. 2 Lake Park`,
  },
];
