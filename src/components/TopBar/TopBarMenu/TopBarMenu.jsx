import * as Styled from './TopBarMenuStyled.jsx';
import Login from './NonLogin/Login.jsx';
import UserBar from './OnLogin/UserBar.jsx';

const TopBarMenu = ({ isLogin, user }) => {
  return (
    <Styled.TopBarMenuContainer>
      {isLogin ? <UserBar user={user} /> : <Login />}
    </Styled.TopBarMenuContainer>
  );
};

export default TopBarMenu;
