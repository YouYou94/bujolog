import { useNavigate } from 'react-router-dom';
import * as Styled from '../NavStyled.jsx';

const Login = ({ setDisplay }) => {
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

export default Login;
