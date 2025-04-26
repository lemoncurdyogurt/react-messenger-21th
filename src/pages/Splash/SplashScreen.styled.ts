import styled, { keyframes } from "styled-components";
import ScreenSVG from "../../assets/images/Splash.svg?react";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SplashContainer = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const Screen = styled(ScreenSVG)`
  width: 100vw;
  height: 100vh;
`;
export const TitleWrapper = styled.div`
  width: 18rem;
  height: 13.2rem;
`;
export const Title = styled.h1``;
export const SubTitle = styled.h2``;
