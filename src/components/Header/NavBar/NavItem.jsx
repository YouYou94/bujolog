import * as Styled from '../styled.jsx';

/* On Login */
export const Home = () => {
  return <Styled.HeaderNavItem>메인 홈</Styled.HeaderNavItem>;
};

export const Mybujo = () => {
  return <Styled.HeaderNavItem>내 저널</Styled.HeaderNavItem>;
};

export const Bujotalk = () => {
  return <Styled.HeaderNavItem>부조토크</Styled.HeaderNavItem>;
};

export const Logout = () => {
  return <Styled.HeaderNavItem>로그아웃</Styled.HeaderNavItem>;
};

/* Non Login */
export const Login = () => {
  return <Styled.HeaderNavItem>로그인</Styled.HeaderNavItem>;
};
