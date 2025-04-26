import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { User } from "../../types/user";
import usersData from "../../mock/users.json";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px; /* 탭바 공간 확보 */
  background-color: #ffffff;
`;

const CurrentUserSection = styled.section`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 8px solid #f0f0f0;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  object-fit: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;

  p {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    font-size: 0.875rem;
    color: #888;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  margin: 1rem;
  color: #333;
`;

const FriendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0 1rem;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    color: #888;
  }
`;

// --- Component ---

const UserProvider: React.FC = () => {
  const storedUserId = localStorage.getItem("currentUserId");
  const initialUserId = storedUserId ? Number(storedUserId) : 1;
  const [currentUserId, setCurrentUserId] = useState<number>(initialUserId);

  const users: User[] = usersData;

  const currentUser = users.find((user) => user.id === currentUserId);
  const otherUsers = users.filter((user) => user.id !== currentUserId);

  useEffect(() => {
    localStorage.setItem("currentUserId", String(currentUserId));
  }, [currentUserId]);

  const handleUserSwitch = (userId: number) => {
    setCurrentUserId(userId);
  };

  return (
    <Container>
      <CurrentUserSection>
        {currentUser ? (
          <>
            <ProfileImage src={currentUser.img} alt={currentUser.name} />
            <UserInfo>
              <p>{currentUser.name}</p>
              <span>{currentUser.state || ""}</span>
            </UserInfo>
          </>
        ) : (
          <p>사용자를 찾을 수 없습니다.</p>
        )}
      </CurrentUserSection>

      <SectionTitle>친구</SectionTitle>

      <FriendList>
        {otherUsers.map((user) => (
          <FriendItem key={user.id}>
            <ProfileImage src={user.img} alt={user.name} />
            <FriendInfo>
              <p onClick={() => handleUserSwitch(user.id)}>{user.name}</p>
              <span>{user.state}</span>
            </FriendInfo>
          </FriendItem>
        ))}
      </FriendList>
    </Container>
  );
};

export default UserProvider;
