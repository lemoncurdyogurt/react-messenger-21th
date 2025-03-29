import styled from "styled-components";
import StatusIcon from "/assets/icons/Status.svg";

const getCurrentTime = () => {
  const now = new Date();

  return now
    .toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    })
};

interface StatusBarProps {
  showTime?: boolean;
}
const StatusBar: React.FC<StatusBarProps> = ({ showTime = true }) => {
  return (
    <StatusBarContainer>
      {showTime && <TimeDisplay>{getCurrentTime()}</TimeDisplay>}
      <StatusIcons src={StatusIcon}></StatusIcons>
    </StatusBarContainer>
  );
};

const StatusBarContainer = styled.div`
  display: flex;
  width: 23.4375rem;
  height: 2.75rem;
  padding: 1.0625rem 1.5rem 0.5625rem 1.75rem;
  justify-content: flex-end;
  align-items: center;
  gap: 12.5625rem;
  flex-shrink: 0;
`;
const TimeDisplay = styled.div`
  color: var(--Grayscale-Black, #121212);
  text-align: center;
  font-family: "SF Pro Text";
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.01031rem;
`;
const StatusIcons = styled.img`
  width: 4.25rem;
  height: 0.875rem;
  flex-shrink: 0;
`;
export default StatusBar;
