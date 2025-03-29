import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chatRoomsData from "../mock/chatroom.json";
import usersData from "../mock/users.json";
import FooterChat from "../components/FooterChat";

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
    const filteredRooms = chatRoomsData.filter((room) =>
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
      <h1>대화</h1>
      <div>
        {chatRooms.length > 0 ? (
          <ul>
            {chatRooms.map((room) => (
              <li key={room.id} onClick={() => navigate(`/chatroom/${room.id}`)}>
                {getChatRoomName(room)}
              </li>
            ))}
          </ul>
        ) : (
          <p>참여 중인 채팅방이 없습니다.</p>
        )}
      </div>
      <FooterChat/>
    </>
  );
};

export default ChatRoomList;
