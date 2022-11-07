import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../Firebase.js';
import Swal from 'sweetalert2';
import * as Styled from '../../../../styled/NavContentsStyled.jsx';

const Logout = ({ setDisplay }) => {
  const navigate = useNavigate();

  const onHandlerLogout = () => {
    Swal.fire({
      title: '로그아웃하시겠습니까?',
      icon: 'question',
      confirmButtonText: '확인',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
      cancelButtonText: '취소',
    }).then(async result => {
      if (result.isConfirmed) {
        await Swal.fire({
          title: '로그아웃 완료!',
          icon: 'success',
          confirmButtonText: '확인',
        });

        await authService.signOut();

        setDisplay('close');
        navigate('/bujolog');
      }
    });
  };

  return (
    <Styled.SettingButton onClick={onHandlerLogout}>
      로그아웃
    </Styled.SettingButton>
  );
};

export default Logout;
