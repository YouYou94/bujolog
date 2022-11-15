import { useNavigate } from 'react-router-dom';
import * as Styled from './TopBarStyled.jsx';

const TopBarLoginButton = () => {
  const navigate = useNavigate();

  const goAuth = () => navigate('/bujolog/auth/login');

  return <Styled.LoginButton onClick={goAuth}>로그인</Styled.LoginButton>;
};

export default TopBarLoginButton;
