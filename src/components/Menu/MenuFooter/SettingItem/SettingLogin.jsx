import { useNavigate } from 'react-router-dom';
import * as Styled from '../../MenuStyled.jsx';

const SettingLogin = ({ setDisplay }) => {
  const navigate = useNavigate();

  return (
    <Styled.SettingButton
      onClick={() => {
        setDisplay('close');
        navigate('/bujolog/auth/login');
      }}
    >
      로그인
    </Styled.SettingButton>
  );
};

export default SettingLogin;
