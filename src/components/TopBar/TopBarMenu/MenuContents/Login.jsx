import { useNavigate } from 'react-router-dom';
import * as Styled from '../../styled.jsx';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Styled.TopBarMenuLogin onClick={() => navigate('/bujolog/auth/login')}>
      로그인
    </Styled.TopBarMenuLogin>
  );
};

export default Login;
