"use client";
// pages/user-management.tsx

import React from "react";
import RegisterPage from "./register"; // Import your RegisterPage component
import UserListPage from "./user-list"; // Import your UserListPage component
import styles from "./user-management.module.css"; // Add your CSS styles

const UserManagementPage = () => {
  const [users, setUsers] = React.useState([
    {
      id: 1,
      name: "John",
      explanation: "Doe",
      policy: "male",
      timeCycle: "johndoe",
      tag: "user",
    },
    // Add more user objects as needed
  ]);

  const handleRegister = (user) => {
    console.log("🚀 ~ handleRegister ~ user:", user);
    setUsers((data) => [
      ...data,
      {
        id: data.length + 1,
        name: user.name,
        explanation: user.explanation,
        policy: user.policy,
        timeCycle: user.timeCycle,
        tag: user.tag
      },
    ]);
  };

  const onDeleteUser = (user) => {
    setUsers((data) => data.filter((item) => item?.id != user?.id));
  };
  return (
    <div className={styles.userManagement}>
      <div className={styles.leftPanel}>
        <RegisterPage handleRegister={handleRegister} />
      </div>
      <div className={styles.rightPanel}>
        <UserListPage users={users} onDeleteUser={onDeleteUser} />
      </div>
    </div>
  );
};

export default UserManagementPage;
