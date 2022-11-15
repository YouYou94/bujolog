import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    navigate('/bujolog');
    dispatch(close());
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
