import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAllBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletButtonStyled.jsx';

const Save = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveBulletSetting = () => {
    dispatch(saveAllBullet());
    navigate('/bujolog');
  };

  return (
    <Styled.Button onClick={saveBulletSetting} color="rgb(138, 43, 226)">
      저장
    </Styled.Button>
  );
};

export default Save;
