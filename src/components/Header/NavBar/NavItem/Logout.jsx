import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../Firebase.js';
import Swal from 'sweetalert2';
import * as Styled from '../../styled.jsx';

const Logout = () => {
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

export default Logout;
