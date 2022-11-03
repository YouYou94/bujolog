import { useNavigate } from 'react-router-dom';
import { authService } from '../../../Firebase.js';
import Swal from 'sweetalert2';
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

  const onHandlerSignOut = () => {
    Swal.fire({
      title: '로그아웃하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
    }).then(async result => {
      if (result.isConfirmed) {
        Swal.fire('로그아웃!', '로그아웃하셨습니다. 감사합니다.', 'success');
        await authService.signOut();
        navigate('/bujolog');
      }
    });
  };

  return (
    <Styled.HeaderNavItem onClick={onHandlerSignOut}>
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
