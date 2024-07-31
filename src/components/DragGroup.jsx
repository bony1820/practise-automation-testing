"use client";
import React from "react";
import styles from "./DragGroup.module.css";

function DragGroup({ children }) {
  return <div className={styles.group}>{children}</div>;
}

export default DragGroup;
