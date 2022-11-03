import * as Styled from '../styled.jsx';
import Login from './MenuContents/Login.jsx';

const TopBarMenu = ({ isLogin }) => {
  return (
    <Styled.TopBarMenuContainer>
      {isLogin ? <></> : <Login />}
    </Styled.TopBarMenuContainer>
  );
};

export default TopBarMenu;
