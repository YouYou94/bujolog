import { useNavigate } from 'react-router-dom';
import * as Styled from '../../../styled/TopBarStyled.jsx';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <Styled.RightContentsButton onClick={() => navigate('/bujolog/auth/login')}>
      로그인
    </Styled.RightContentsButton>
  );
};

export default LoginButton;
