import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "./pages/Splash/SplashScreen";
import FriendList from "./pages/FriendList/FriendList";
import Profile from "./pages/Profile";
import ChatList from "./pages/ChatList/ChatList";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import GlobalStyle from "./styles/GlobalStyle";
import { TabBar } from "./components/TabBar";

const LayoutWithTabBar = () => (
  <>
    <Outlet />
    <TabBar />
  </>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <SplashScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            {/* TabBar가 필요한 페이지 그룹 */}
            <Route element={<LayoutWithTabBar />}>
              <Route path="/" element={<FriendList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chatlist" element={<ChatList />} />
            </Route>

            {/* TabBar 없는 화면 */}
            <Route path="/chatroom/:roomId" element={<ChatRoom />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
