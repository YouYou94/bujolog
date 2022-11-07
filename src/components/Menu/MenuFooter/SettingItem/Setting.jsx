// Context
import { useContext } from 'react';
import { LoginContext } from '../../../../Context/Context.jsx';

// Setting Components
import SettingLogin from './SettingLogin.jsx';
import SettingLogout from './SettingLogout.jsx';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

const Setting = ({ setDisplay }) => {
  const isLogin = useContext(LoginContext);

  return (
    <Styled.SettingWrapper>
      {isLogin ? (
        <SettingLogout setDisplay={setDisplay} />
      ) : (
        <SettingLogin setDisplay={setDisplay} />
      )}
    </Styled.SettingWrapper>
  );
};

export default Setting;
