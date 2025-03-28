import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/images/스플래쉬.svg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Logo = styled.img`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // 2초 후 메인 화면으로 전환
    }, 2000);

    return () => clearTimeout(timer); // 메모리 누수 방지
  }, [onComplete]);

  return (
    <SplashContainer>
      <Logo src={logo} alt="Splash Logo" />
    </SplashContainer>
  );
};

export default SplashScreen;
