import Login from './SettingItem/Login.jsx';
import Logout from './SettingItem/Logout.jsx';
import { useContext } from 'react';
import * as Styled from '../Menu/MenuStyled.jsx';
import { LoginContext } from '../../Context/Context.jsx';

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
