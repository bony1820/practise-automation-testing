"use client";
// pages/index.js
import React from "react";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        marginTop: 20
      }}
    >
      <iframe
        src="/practise1"
        width="500"
        height="700"
        style={{ border: "none" }}
        title="Google"
        name="frame1"
        id="frame1"
      ></iframe>
    </div>
  );
};

export default HomePage;
