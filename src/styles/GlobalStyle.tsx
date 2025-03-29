import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  	@font-face {
		font-family : 'Pretendard';
		src : url('../src/assets/fonts/Pretendard-Regular.woff2');
		font-style: normal;
    }
    @font-face {
      font-family : 'Pretendard ExtraBold';
      src : url('../src/assets/fonts/Pretendard-ExtraBold.woff2');
        font-style: normal;
    }

  * {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body{
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    background-color: #f0f0f0;
    width: 100%;
    height: 100vh;
  }
`;

export default GlobalStyle;
