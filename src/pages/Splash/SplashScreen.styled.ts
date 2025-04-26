import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const SplashContainer = styled.div`
  animation: ${fadeIn} 1.5s ease-in-out;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Background =styled.img`
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: normal;
  color: white;
  margin: 0;
  margin-top: 0.5rem;
`;
