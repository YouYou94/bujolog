import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { MyContext } from '../../App.js';
import { close } from '../../store/modules/SideMenuModule.jsx';
import * as Styled from './SideMenuStyled.jsx';

const SideMenuSetting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useContext(MyContext).isLogin;

  const goAuth = () => {
    navigate('/bujolog/auth/login');
    dispatch(close());
  };

  const logout = () => {
    Swal.fire({
      text: '로그아웃하시겠습니까?',
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showCancelButton: true,
    }).then(async result => {
      if (result.isConfirmed) {
        await signOut();
        navigate('/bujolog');
        dispatch(close());
      }
    });
  };

  return (
    <Styled.FooterWrapper>
      {isLogin ? (
        <Styled.SettingButton onClick={logout}>로그아웃</Styled.SettingButton>
      ) : (
        <Styled.SettingButton onClick={goAuth}>로그인</Styled.SettingButton>
      )}
    </Styled.FooterWrapper>
  );
};

export default SideMenuSetting;
