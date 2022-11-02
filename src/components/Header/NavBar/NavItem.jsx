import { useNavigate } from 'react-router-dom';
import * as Styled from '../styled.jsx';

/* On Login */
export const Home = () => {
  return <Styled.HeaderNavItem>메인 홈</Styled.HeaderNavItem>;
};

export const Mybujo = () => {
  const navigate = useNavigate();
  return (
    <Styled.HeaderNavItem onClick={() => navigate('/bujolog/@:username')}>
      내 저널
    </Styled.HeaderNavItem>
  );
};

export const Bujotalk = () => {
  return <Styled.HeaderNavItem>부조토크</Styled.HeaderNavItem>;
};

export const Logout = () => {
  const navigate = useNavigate();
  return (
    <Styled.HeaderNavItem
      onClick={() => {
        navigate('/bujolog');
      }}
    >
      로그아웃
    </Styled.HeaderNavItem>
  );
};

/* Non Login */
export const Login = () => {
  const navigate = useNavigate();
  return (
    <Styled.HeaderNavItem onClick={() => navigate('/bujolog/auth/login')}>
      로그인
    </Styled.HeaderNavItem>
  );
};
