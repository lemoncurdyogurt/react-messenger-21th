import { Link } from "react-router-dom";

const FooterNavigator = () =>{
  return(
    <>
      <Link to="/">
        <img src="/assets/icons/홈.png" alt="FriendList" />
      </Link>
      <Link to="/chatlist">
        <img src="/assets/icons/대화.png" alt="ChatList" />
      </Link>
      <Link to="">
        <img src="/assets/icons/통화.png" alt="Call" />
      </Link>
      <Link to="">
        <img src="/assets/icons/서비스.png" alt="Service" />
      </Link>
    </>
  )
}
export default FooterNavigator;