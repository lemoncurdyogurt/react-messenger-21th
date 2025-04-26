import { useEffect } from "react";
import * as S from "./SplashScreen.styled";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete(); // 2초 후 메인 화면으로 전환
    }, 2000);

    return () => clearTimeout(timer); // 메모리 누수 방지
  }, [onComplete]);

  return (
    <S.SplashContainer>
      <S.Background src="/images/Splash.svg" alt="splash" />
      <S.TitleWrapper>
        <S.Title>LINE</S.Title>
        <S.SubTitle>TALK</S.SubTitle>
      </S.TitleWrapper>
    </S.SplashContainer>
  );
};

export default SplashScreen;
