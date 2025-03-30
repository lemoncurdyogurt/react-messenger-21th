import { User } from "../types/user";
import usersData from "../mock/users.json";
import React, { useState, useEffect } from "react";
import FooterFriend from "../components/FooterFriend";

const UserProvider: React.FC = () => {
  const storedUserId = localStorage.getItem("currentUserId");
  const initialUserId = storedUserId ? Number(storedUserId) : 1;
  const [currentUserId, setCurrentUserId] = useState<number>(initialUserId);

  const users: User[] = usersData;

  const currentUser = users.find((user) => user.id === currentUserId);
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  //유저 변경시, 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("currentUserId", String(currentUserId));
  }, [currentUserId]);

  const handleUserSwitch = (userId: number) => {
    setCurrentUserId(userId);
  };

  return (
    <div style={{ width: "100%", height: "100vh", overflowY: "auto"}}>
      <div id="currentUser">
        {currentUser ? (
          <>
            <img src={currentUser.img} alt={currentUser.name} style={{ width: "3.125rem", height: "3.125rem" }}/>
            <p>{currentUser.name}</p>
            <p>{currentUser.state || []}</p>
          </>
        ) : (
          <p>사용자를 찾을 수 없습니다.</p>
        )}
      </div>

      <div>
        <br />
        <h2>친구</h2>
        {otherUsers.map((user) => (
          <div key={user.id}>
            <img
              src={user.img}
              alt={user.name}
              style={{ width: "3.125rem", height: "3.125rem" }}
            />
            <p onClick={() => handleUserSwitch(user.id)}>{user.name}</p>
            <p>{user.state}</p>
          </div>
        ))}
      </div>
      <FooterFriend />
    </div>
  );
};

export default UserProvider;
