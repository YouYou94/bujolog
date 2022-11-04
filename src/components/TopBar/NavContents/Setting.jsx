import Login from './SettingItem/Login.jsx';
import Logout from './SettingItem/Logout.jsx';
import * as Styled from './NavContentsStyled.jsx';

const Setting = ({ isLogin, setDisplay }) => {
  return (
    <Styled.SettingContainer>
      {isLogin ? (
        <Logout setDisplay={setDisplay} />
      ) : (
        <Login setDisplay={setDisplay} />
      )}
    </Styled.SettingContainer>
  );
};

export default Setting;
