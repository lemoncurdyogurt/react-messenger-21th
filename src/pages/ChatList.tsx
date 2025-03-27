import { useNavigate } from "react-router-dom";
import chatRooms from "../mock/Chatroom.json";

const ChatList: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (roomId: number)=>{
    navigate(`/chatroom/${roomId}`)
  }
  return (
    <div>
      <h1>대화</h1>
      <ul>
        {chatRooms.map((room)=>(
          <li key={room.id} onClick={() => handleClick(room.id)}>
            <p>{room.name}</p>
            <span>({room.usersId.length})</span>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default ChatList;