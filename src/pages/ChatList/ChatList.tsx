import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chatRoomsData from "../../mock/chatroom.json";
import usersData from "../../mock/users.json";
import * as S from "../ChatList/ChatList.styled";
import ChatListHeader from "../../components/ChatHeader"

interface ChatRoom {
  id: number;
  name: string;
  usersId: number[];
  isFixed: boolean;
}

const ChatRoomList: React.FC = () => {
  const navigate = useNavigate();

  const storedUserId = localStorage.getItem("currentUserId");
  const currentUserId = storedUserId ? Number(storedUserId) : 1;

  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  
  //해당 유저가 참여하고 있는 채팅방리스트 반환
  useEffect(() => {
    const filteredRooms = chatRoomsData.filter((room: ChatRoom) =>
      room.usersId.includes(currentUserId)
    );
    setChatRooms(filteredRooms);
  }, [currentUserId]);


  const getChatRoomName = (room: ChatRoom) => {
    if (room.name) return room.name;

    const otherUserId = room.usersId.find((id) => id !== currentUserId);
    const otherUser = usersData.find((user) => user.id === otherUserId);
    
    return otherUser!.name;
  };

  return (
    <>
      <ChatListHeader />
      <S.ChatSearchWrapper className="search" action="" method="get">
        <S.ChatSearch className="searchtxt" placeholder="검색" />
      </S.ChatSearchWrapper>
      <S.ChatContainer>
        {chatRooms.length > 0 ? (
          <S.ChatList>
            {chatRooms.map((room) => (
              <S.ChatListItem key={room.id} onClick={() => navigate(`/chatroom/${room.id}`)}>
                {getChatRoomName(room)}
              </S.ChatListItem>
            ))}
          </S.ChatList>
        ) : (
          <S.EmptyMessage>참여 중인 채팅방이 없습니다.</S.EmptyMessage>
        )}
      </S.ChatContainer>
    </>
  );
};

export default ChatRoomList;
