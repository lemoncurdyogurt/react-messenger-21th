import { useParams } from "react-router-dom";

const ChatRoom: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>(); // roomId가 string 타입임을 명시

  return (
    <div>
      <h2>Chat Room {roomId}</h2>
      <p>이곳은 채팅방 {roomId} 입니다.</p>
    </div>
  );
};

export default ChatRoom;