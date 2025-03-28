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

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0; /* 배경색 설정 */
  }

  .App {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 375px;
    height: 812px;
    background-color: white; /* 원하는 배경색 */
  }
  
  img{
    width: 2.75rem;
    height: 2.75rem;
    object-fit: "cover";
    object-position: "center";
  }
`;

export default GlobalStyle;
