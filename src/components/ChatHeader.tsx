import React from "react";
import styled from "styled-components";
import PlusChat from "../assets/icons/ChatList/plusChat.svg?react"
import Folder from "../assets/icons/ChatList/folder.svg?react"
import SettingsGear from "../assets/icons/ChatList/settingsGear.svg?react"

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 60px;
  border-bottom: 1px solid #ddd;
  background-color: #fff;
`;

const HeaderTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #222;
`;

const Icon = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    width: 24px;
    height: 24px;
    color: #555;
    cursor: pointer;
  }
`;

const ChatListHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>채팅</HeaderTitle>
      <Icon>
        <PlusChat />
        <Folder />
        <SettingsGear />
      </Icon>
    </HeaderWrapper>
  );
};

export default ChatListHeader;