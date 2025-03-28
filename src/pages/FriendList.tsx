import { User } from "../types/user";
import usersData from "../mock/users.json";
import React, { useState } from "react";

const UserProvider: React.FC = () => {
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  const users: User[] = usersData;

  const currentUser = users.find((user) => user.id === currentUserId);
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  const handleUserSwitch = (userId: number) => {
    setCurrentUserId(userId);
  };

  return (
    <>
      <div id="currentUser">
        {currentUser ? (
          <>
            <img src={currentUser.img} alt={currentUser.name} />
            <p>{currentUser.name}</p>
            <p>{currentUser.state || []}</p>
          </>
        ) : (
          <p>사용자를 찾을 수 없습니다.</p>
        )}
      </div>

      <div>
        <p>친구
        </p>
        {otherUsers.map((user) => (
          <>
            <img src={user.img} alt={user.name} />
            <p key={user.id} onClick={() => handleUserSwitch(user.id)}>
              {user.name}
            </p>
            <p>{user.state}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default UserProvider;
