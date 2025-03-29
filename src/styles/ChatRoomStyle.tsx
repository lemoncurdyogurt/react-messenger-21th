import styled from "styled-components";

export const Container = styled.div`
  background: #7791b8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoomTitle = styled.h1`
  color: #181a1b;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 700;
  line-height: 155%;
  letter-spacing: -0.001rem;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.125rem 0.625rem;
  gap: 0.625rem;
  width: 100%;
`;

export const DateHeader = styled.h1`
  color: #464646;
  text-align: center;
  font-family: Pretendard;
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.00063rem;
  flex-shrink: 0;
`;

export const ChatList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.375rem;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 1rem;
  padding-bottom: 3rem;
`;

export const SenderName = styled.p`
  color: var(--Grayscale-Black, #121212);
  font-family: Pretendard;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.00081rem;
`;

export const MessageTime = styled.p`
  color: #464646;
  text-align: right;
  font-family: Pretendard;
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.00063rem;
`;

export const MessageText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.00094rem;
  word-wrap: break-word;
  white-space: pre-wrap;
  width: 100%;
`;

export const MessageContainer = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: ${({ isCurrentUser }) => (isCurrentUser ? "#4cd964" : "#e4e4e4")};
  margin-bottom: 1rem;
  max-width: 9.0625rem;
  position: relative;
`;

export const MessageWrapper = styled.div<{ isCurrentUser: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  align-items: ${({ isCurrentUser }) =>
    isCurrentUser ? "flex-end" : "flex-start"};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
  background: #fff;
  border-top: 1px solid #e8e8e8;
  position: sticky;
  bottom: 0;
  z-index: 10;
  gap: 0.625rem;
  input {
    flex: 1;
    height: 2.0625rem;
    padding: 0.1875rem 1.0625rem;
    border-radius: 1.3125rem;
    border: 0.7px solid #e8e8e8;
    background: #f5f5f5;
  }

  button {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
  }
`;
export const SendIcon = styled.img`
  width: 1.01444rem;
  height: 1.022rem;
  flex-shrink: 0;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BackIcon = styled.img`
  width: 1.0625rem;
  height: 1.0625rem;
`;
