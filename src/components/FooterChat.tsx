import { Link } from "react-router-dom";

const FooterChat = () => {
  return (
    <>
      <Link to="/">
        <img src="/assets/icons/홈grey.svg" alt="FriendList" />
      </Link>
      <Link to="/chatlist">
        <img src="/assets/icons/대화.svg" alt="ChatList" />
      </Link>
      <Link to="">
        <img src="/assets/icons/통화.svg" alt="Call" />
      </Link>
      <Link to="">
        <img src="/assets/icons/서비스.svg" alt="Service" />
      </Link>
    </>
  );
};
export default FooterChat;
