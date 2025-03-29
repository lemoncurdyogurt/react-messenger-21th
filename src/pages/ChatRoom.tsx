import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import chatRoomsData from "../mock/chatroom.json";
import usersData from "../mock/users.json";
import chatsData from "../mock/chat.json";
import * as S from "../styles/ChatRoomStyle";
import sender from "/assets/icons/Send.svg";
import arrow from "/assets/icons/arrow-left.svg";

// Message와 AllChats 타입 명시
interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
}

interface AllChats {
  date: string;
  chats: Message[];
}

interface ChatRoom {
  id: number;
  name: string;
  usersId: number[];
}

// ChatData 인터페이스 추가
interface ChatData {
  roomId: number;
  allChats: AllChats[];
}

const ChatRoomDetail: React.FC = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>(); // roomId 타입 명시
  const [chatRoomName, setChatRoomName] = useState<string>("");
  const [allChats, setAllChats] = useState<AllChats[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [currentUserId, setCurrentUserId] = useState<number>(
    Number(localStorage.getItem("currentUserId")) || 0
  );

  // 날짜 포맷터
  const today = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  // 채팅방 데이터 로드 함수를 useCallback으로 메모이제이션
  const loadChatRoomData = useCallback(() => {
    if (!roomId) return;

    // 채팅방 정보 설정
    const room: ChatRoom | undefined = chatRoomsData.find((room: ChatRoom) => room.id === Number(roomId));
    if (room) {
      const otherUserId = room.usersId.find((id) => id !== currentUserId);
      const otherUserName = otherUserId
        ? usersData.find((user) => user.id === otherUserId)?.name || "알 수 없는 사용자"
        : "알 수 없는 사용자";

      setChatRoomName(room.name || otherUserName);
    }

    // 채팅 데이터 로드
    const savedChats = localStorage.getItem(`chat_${roomId}`);
    if (savedChats) {
      try {
        const parsedChats = JSON.parse(savedChats);
        setAllChats(parsedChats);
      } catch (error) {
        console.error("채팅 데이터 파싱 오류:", error);
        setAllChats([]);
      }
    } else {
      const roomChats = chatsData.find((chat: ChatData) => chat.roomId === Number(roomId));
      setAllChats(roomChats ? roomChats.allChats : []);
    }
  }, [roomId, currentUserId]);

  // 초기 로드 및 roomId 또는 currentUserId 변경 시 데이터 새로 로드
  useEffect(() => {
    const storedUserId = Number(localStorage.getItem("currentUserId"));
    if (storedUserId !== currentUserId) {
      setCurrentUserId(storedUserId);
    }

    loadChatRoomData();
  }, [roomId, currentUserId, loadChatRoomData]);

  const getUserName = (userId: number) => {
    return (
      usersData.find((user) => user.id === userId)?.name || "알 수 없는 사용자"
    );
  };

  const isCurrentUser = (senderId: number) => senderId === currentUserId;

  // 메시지 전송 함수
  const sendMessage = () => {
    if (!newMessage.trim() || !roomId) return;

    const now = new Date().toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMsg: Message = {
      id: Date.now(),
      senderId: currentUserId,
      text: newMessage,
      time: now,
    };

    // 새로운 메시지로 기존 채팅 데이터 업데이트
    let updatedChats = [...allChats];
    const todayChatIndex = updatedChats.findIndex(
      (chat) => chat.date === today
    );

    if (todayChatIndex >= 0) {
      // 오늘 날짜의 채팅이 이미 있으면 해당 항목에 메시지 추가
      const updatedTodayChat = {
        ...updatedChats[todayChatIndex],
        chats: [...updatedChats[todayChatIndex].chats, newMsg],
      };

      updatedChats = [
        ...updatedChats.slice(0, todayChatIndex),
        updatedTodayChat,
        ...updatedChats.slice(todayChatIndex + 1),
      ];
    } else {
      // 오늘 날짜의 채팅이 없으면 새로 추가
      updatedChats = [...updatedChats, { date: today, chats: [newMsg] }];
    }

    // 상태 업데이트 및 로컬 스토리지 저장
    setAllChats(updatedChats);
    localStorage.setItem(`chat_${roomId}`, JSON.stringify(updatedChats));
    setNewMessage("");
  };

  // 사용자 전환 처리
  const handleUserSwitch = (newUserId: number) => {
    if (newUserId === currentUserId) return;

    localStorage.setItem("currentUserId", newUserId.toString());
    setCurrentUserId(newUserId);

    // 현재 대화방에 새 사용자가 포함되어 있는지 확인
    if (roomId) {
      const currentRoom = chatRoomsData.find(
        (room: ChatRoom) => room.id === Number(roomId)
      );

      // 현재 방에 새 사용자가 없다면 새 사용자가 속한 다른 방으로 이동
      if (currentRoom && !currentRoom.usersId.includes(newUserId)) {
        const newRoom = chatRoomsData.find((room: ChatRoom) =>
          room.usersId.includes(newUserId)
        );
        if (newRoom) {
          navigate(`/chat/${newRoom.id}`);
        }
      }
    }
  };

  const handleBackClick = () => {
    navigate("/chatlist");
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.BackIcon src={arrow} onClick={handleBackClick} />
        <S.RoomTitle>{chatRoomName}</S.RoomTitle>
      </S.TitleWrapper>

      <S.ChatList>
        {allChats.map((chatDay) => (
          <S.DateSection key={chatDay.date}>
            <S.DateHeader>{chatDay.date}</S.DateHeader>
            {chatDay.chats.map((message) => (
              <S.MessageWrapper
                key={message.id}
                isCurrentUser={isCurrentUser(message.senderId)}
              >
                {!isCurrentUser(message.senderId) && (
                  <S.SenderName
                    onClick={() => handleUserSwitch(message.senderId)}
                  >
                    {getUserName(message.senderId)}
                  </S.SenderName>
                )}
                <S.MessageContainer
                  isCurrentUser={isCurrentUser(message.senderId)}
                >
                  <S.MessageText>{message.text}</S.MessageText>
                </S.MessageContainer>
                <S.MessageTime>{message.time}</S.MessageTime>
              </S.MessageWrapper>
            ))}
          </S.DateSection>
        ))}
      </S.ChatList>

      <S.InputContainer>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요"
        />
        <S.SendIcon src={sender} onClick={sendMessage} />
      </S.InputContainer>
    </S.Container>
  );
};

export default ChatRoomDetail;