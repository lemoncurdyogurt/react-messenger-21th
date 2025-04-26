import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "../assets/icons/TabBar/Home.svg?react";
import PhoneIcon from "../assets/icons/TabBar/Phone.svg?react";
import SpeechBubbleIcon from "../assets/icons/TabBar/SpeechBubble.svg?react";
import ServiceIcon from "../assets/icons/TabBar/Service.svg?react";

// TabBar Wrapper
const TabBarWrapper = styled.div`
  position: absolute;;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  border-top: 1px solid #ddd;
  background-color: white;
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ $active }) => ($active ? "black" : "gray")};
  font-size: 12px;
  transition: color 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    fill: #ffffff // 아이콘 색
    margin-bottom: 4px;
  }
`;


export const TabBar = () => {
  return (
    <TabBarWrapper>
      <NavLink to="/">
        {({ isActive }) => (
          <IconWrapper $active={isActive}>
            <HomeIcon />
            홈
          </IconWrapper>
        )}
      </NavLink>

      <NavLink to="/chatlist">
        {({ isActive }) => (
          <IconWrapper $active={isActive}>
            <SpeechBubbleIcon />
            채팅
          </IconWrapper>
        )}
      </NavLink>
      
      <NavLink to="/phone">
        {({ isActive }) => (
          <IconWrapper $active={isActive}>
            <PhoneIcon />
            전화
          </IconWrapper>
        )}
      </NavLink>

      <NavLink to="/service">
        {({ isActive }) => (
          <IconWrapper $active={isActive}>
            <ServiceIcon />
            서비스
          </IconWrapper>
        )}
      </NavLink>
    </TabBarWrapper>
  );
};
