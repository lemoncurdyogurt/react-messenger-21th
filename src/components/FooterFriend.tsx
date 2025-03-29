import { Link } from "react-router-dom";

const FooterFriend = () => {
  return (
    <div    >
      <Link to="/">
        <img src="/assets/icons/홈black.svg" alt="FriendList" />
      </Link>
      <Link to="/chatlist">
        <img src="/assets/icons/대화grey.svg" alt="ChatList" />
      </Link>
      <Link to="">
        <img src="/assets/icons/통화.svg" alt="Call" />
      </Link>
      <Link to="">
        <img src="/assets/icons/서비스.svg" alt="Service" />
      </Link>
    </div>
  );
};
export default FooterFriend;
