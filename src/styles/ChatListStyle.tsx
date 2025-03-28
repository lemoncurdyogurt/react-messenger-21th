import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ToggleButton = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 10px;
  margin: 0;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

export const ChatList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const ChatItem = styled.li`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    background: #f0f0f0;
  }
`;

export const ChatName = styled.p`
  margin: 0;
  font-size: 16px;
`;

export const ChatCount = styled.span`
  font-size: 14px;
  color: gray;
`;