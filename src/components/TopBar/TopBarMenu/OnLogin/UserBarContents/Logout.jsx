import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authService } from '../../../../../Firebase.js';
import * as Styled from '../../TopBarMenuStyled.jsx';

const Logout = () => {
  const navigate = useNavigate();

  const onHandlerLogout = () => {
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
        await Swal.fire({
          title: '로그아웃 완료!',
          icon: 'success',
          confirmButtonText: '확인',
        });

        await authService.signOut();

        navigate('/bujolog');
      }
    });
  };
  return (
    <Styled.TopBarUserMenuContent onClick={onHandlerLogout}>
      로그아웃
    </Styled.TopBarUserMenuContent>
  );
};

export default Logout;
