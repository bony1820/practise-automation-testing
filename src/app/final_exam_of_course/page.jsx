"use client";
// pages/user-management.tsx

import React from "react";
import RegisterPage from "./register"; // Import your RegisterPage component
import UserListPage from "./user-list"; // Import your UserListPage component
import styles from "./user-management.module.css"; // Add your CSS styles
import { validCurrentTimeIsAfterSpecifyTime } from "~/utils/timeUtil";
import CountdownTimer from "~/components/CountDownTime"

const UserManagementPage = () => {
  const [reload, setReload] = React.useState(false);
  const [users, setUsers] = React.useState([
    // {
    //   id: 1,
    //   name: "John",
    //   explanation: "Doe",
    //   policy: "male",
    //   timeCycle: "johndoe",
    //   tag: "user",
    // },
    // Add more user objects as needed
  ]);

  const handleRegister = (user) => {
    setUsers((data) => [
      ...data,
      {
        id: data.length + 1,
        protocol: user.protocol,
        localPort: user.localPort,
        explanation: user.explanation,
        isAuthenticated: user.isAuthenticated,
        status: user.status,
        tag: user.tag,
      },
    ]);
  };

  const onDeleteUser = (user) => {
    setUsers((data) => data.filter((item) => item?.id != user?.id));
  };

  // const specifyTime = "2024-09-12 17:15:00"; // Thời gian chỉ định (VD: 2024-08-19 17:10:00)
  // const result = validCurrentTimeIsAfterSpecifyTime(specifyTime);
  // console.log(`Thời gian hiện tại có sau ${specifyTime} không? ${result}`);
  // if (!result) return <CountdownTimer specifyTime={specifyTime} onReloadPage={() => setReload(prev => !prev)}/>;
  return null;
  // return (
  //   <div className={styles.userManagement}>
  //     <div className={styles.leftPanel}>
  //       <RegisterPage handleRegister={handleRegister} />
  //     </div>
  //     <div className={styles.rightPanel}>
  //       <UserListPage users={users} onDeleteUser={onDeleteUser} />
  //     </div>
  //   </div>
  // );
};

export default UserManagementPage;
