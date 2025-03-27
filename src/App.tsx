import { BrowserRouter, Routes, Route } from "react-router-dom";
import FriendList from "./pages/FriendList";
import Profile from "./pages/Profile";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/friendlist" element={<FriendList />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/chatlist" element={<ChatList />}/>
        <Route path="/chatroom/:roomId" element={<ChatRoom />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
