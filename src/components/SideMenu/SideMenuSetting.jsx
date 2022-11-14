import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { close } from '../../store/modules/SideMenuModule.jsx';
import * as Styled from './SideMenuStyled.jsx';

const SideMenuSetting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      <Styled.SettingButton onClick={goAuth}>로그인</Styled.SettingButton>
      <Styled.SettingButton onClick={logout}>로그아웃</Styled.SettingButton>
    </Styled.FooterWrapper>
  );
};

export default SideMenuSetting;
