import * as Styled from './styled.jsx';
import Login from './NonLogin/Login.jsx';
import UserMenu from './OnLogin/UserMenu.jsx';

const TopBarMenu = ({ isLogin }) => {
  return (
    <Styled.TopBarMenuContainer>
      {isLogin ? <UserMenu /> : <Login />}
    </Styled.TopBarMenuContainer>
  );
};

export default TopBarMenu;
