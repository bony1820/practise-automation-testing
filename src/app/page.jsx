"use client";
// pages/index.js
import React from 'react';
import Image from 'next/image';
import { List } from 'antd';

const data = [
  { name: "Bài tập 1", link: "/practise1" },
  { name: "Bài tập 2", link: "/practise2" },
  { name: "Bài tập 3", link: "/practise3" },
  { name: "Bài tập 4", link: "/practise4" },
  { name: "Bài tập 5", link: "#" },
  { name: "Thi cuối khoá", link: "#" }, 
];

const HomePage = () => {
  return (
    <div>
      <div style={{ textAlign: 'center', width: '100%', height: '300px', position: 'relative', backgroundColor: 'white' }}>
        <Image
          src="/logo.svg"
          alt="Example Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={{ marginTop: '50px', paddingLeft: '200px' }}>
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <a href={item.link}>{item.name}</a>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default HomePage;

