import { useNavigate } from 'react-router-dom';
import * as Styled from '../TopBarStyled.jsx';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <Styled.TopBarLoginButton onClick={() => navigate('/bujolog/auth/login')}>
      로그인
    </Styled.TopBarLoginButton>
  );
};

export default LoginButton;
