import styled from "styled-components";

export const ChatSearchWrapper = styled.form`
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
`;
export const ChatSearch = styled.input` width: 100%;
  height: 36px;
  padding: 0 1rem;
  border: none;
  border-radius: 18px;
  background-color: #e9e9e9;
  font-size: 0.9rem;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;

export const ChatContainer = styled.div`
  padding: 1rem;
  padding-bottom: 60px;
`;
export const ChatList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const ChatListItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;
export const EmptyMessage = styled.p`
  text-align: center;
  color: gray;
  margin-top: 2rem;
`;
