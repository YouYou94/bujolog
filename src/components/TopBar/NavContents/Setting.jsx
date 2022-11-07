import Login from './SettingItem/Login.jsx';
import Logout from './SettingItem/Logout.jsx';
import * as Styled from '../../../styled/NavContentsStyled.jsx';
import { useContext } from 'react';
import { LoginContext } from '../../../Context/Context.jsx';

const Setting = ({ setDisplay }) => {
  const isLogin = useContext(LoginContext);

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
