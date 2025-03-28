import React, { useState, useMemo } from "react";
import * as S from "../styles/ChatListStyle";
import arrowUp from "../assets/icons/arrow-up.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import ChatRoomData from "../mock/Chatroom.json";

interface ChatRoom {
  id: number;
  name: string;
  usersId: number[];
  isFixed: boolean;
}

interface ChatListProps {
  isOpen: boolean;
  handleToggle: () => void;
  chatRooms?: ChatRoom[];
  handleClick: (id: number) => void;
}

const ChatList: React.FC<ChatListProps> = ({
  isOpen,
  handleToggle,
  chatRooms = ChatRoomData,
  handleClick,
}) => {
  const [sortType, setSortType] = useState<'all' | 'fixed' | 'unread'>('all');

  // 디버깅을 위한 콘솔 로그 추가
  console.log('ChatRooms:', chatRooms);
  console.log('Is Array:', Array.isArray(chatRooms));

  // 채팅방 정렬 및 필터링 로직
  const sortedChatRooms = useMemo(() => {
    // 안전한 배열 변환
    const rooms = Array.isArray(chatRooms) ? chatRooms : [];

    let filteredRooms = [...rooms];

    // 정렬 타입에 따른 필터링
    switch (sortType) {
      case 'fixed':
        filteredRooms = filteredRooms.filter(room => room.isFixed);
        break;
      case 'unread':
        // 미구현: 읽지 않은 메시지 로직 필요
        break;
    }

    // 고정된 대화방 먼저, 그 다음 이름순 정렬
    return filteredRooms.sort((a, b) => {
      // 고정된 대화방 우선 정렬
      if (a.isFixed !== b.isFixed) {
        return a.isFixed ? -1 : 1;
      }
      
      // 이름이 없으면 사용자 ID 기준으로 정렬
      const nameA = a.name || a.usersId.join(',');
      const nameB = b.name || b.usersId.join(',');
      
      return nameA.localeCompare(nameB);
    });
  }, [chatRooms, sortType]);

  // 드롭다운 아이템 클릭 핸들러
  const handleDropdownItemClick = (type: 'all' | 'fixed' | 'unread') => {
    setSortType(type);
  };

  return (
    <S.Container>
      <S.Title>대화</S.Title>
      <S.ToggleButton
        src={isOpen ? arrowUp : arrowDown}
        alt="toggle"
        onClick={handleToggle}
      />
      <S.DropdownMenu isOpen={isOpen}>
        <S.DropdownItem onClick={() => handleDropdownItemClick('all')}>
          전체
        </S.DropdownItem>
        <S.DropdownItem onClick={() => handleDropdownItemClick('fixed')}>
          고정대화순
        </S.DropdownItem>
        <S.DropdownItem onClick={() => handleDropdownItemClick('unread')}>
          안 읽은 메세지 순
        </S.DropdownItem>
      </S.DropdownMenu>
      <S.ChatList>
        {sortedChatRooms.map((room) => (
          <S.ChatItem key={room.id} onClick={() => handleClick(room.id)}>
            <S.ChatName>
              {room.name || room.usersId.join(',')}
            </S.ChatName>
            <S.ChatCount>({room.usersId.length})</S.ChatCount>
          </S.ChatItem>
        ))}
      </S.ChatList>
    </S.Container>
  );
};

export default ChatList;