import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletStyled.jsx';

const BulletSetting = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goNext = () => navigate('/bujolog/make/monthly');

  return (
    <Styled.BulletSettingWrap>
      <Styled.BulletSettingButton onClick={goBack}>
        이전
      </Styled.BulletSettingButton>
      <Styled.BulletSettingButton>저장</Styled.BulletSettingButton>
      <Styled.BulletSettingButton onClick={goNext}>
        다음
      </Styled.BulletSettingButton>
    </Styled.BulletSettingWrap>
  );
};

export default BulletSetting;
