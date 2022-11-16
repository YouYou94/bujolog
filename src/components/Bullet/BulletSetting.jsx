import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveBullet } from '../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletStyled.jsx';

const BulletSetting = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => navigate(-1);

  const onHandlerSaveBullet = () => dispatch(saveBullet());

  return (
    <Styled.SettingWrapper>
      <Styled.Button onClick={goBack}>뒤로가기</Styled.Button>
      <Styled.Button onClick={onHandlerSaveBullet}>저장하기</Styled.Button>
    </Styled.SettingWrapper>
  );
};

export default BulletSetting;
