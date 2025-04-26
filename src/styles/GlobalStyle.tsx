import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    width: 100%;
    height: 100%;
  }

  #root {
  width: 375px;
  min-height: 100%;
  margin: 0 auto;
  background: white;
  position: relative;
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard Variable', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    max-height: 100vh;
    background-color: #f0f0f0;
    overflow-x: hidden; /* 좌우 넘침 방지 */
    overflow-y: auto;
    display: flex;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center;      /* 세로 가운데 정렬 */
  }
`;

export default GlobalStyle;
