import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import FriendList from "./pages/FriendList";
import Profile from "./pages/Profile";
import ChatList from "./pages/ChatList";
import ChatRoom from "./pages/ChatRoom";
import GlobalStyle from "./styles/GlobalStyle";
import StatusBar from "./components/StatusBar";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <SplashScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          <StatusBar />
          <Routes>
            <Route path="/" element={<FriendList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/chatroom/:roomId" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
