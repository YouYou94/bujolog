// Setting Components
import SettingLogin from './SettingLogin.jsx';
import SettingLogout from './SettingLogout.jsx';

// Redux
import { useSelector } from 'react-redux';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

const Setting = ({ setDisplay }) => {
  const isLogin = useSelector(state => state.isLoginReducer.login);

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
