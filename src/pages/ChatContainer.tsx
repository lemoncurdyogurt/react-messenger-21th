import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatRoom from "../mock/Chatroom.json";

const ChatContainer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (id: number) => {
    console.log(`채팅방 ${id} 클릭됨`);
  };

  return (
    <ChatList 
      isOpen={isOpen}
      handleToggle={handleToggle}
      chatRooms={ChatRoom}
      handleClick={handleClick}
    />
  );
};

export default ChatContainer;