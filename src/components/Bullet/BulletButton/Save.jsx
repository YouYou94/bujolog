import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletButtonStyled.jsx';

const Save = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveBulletSetting = () => {
    dispatch(saveBullet());
    navigate('/bujolog/mine');
  };

  return <Styled.Button onClick={saveBulletSetting}>Save</Styled.Button>;
};

export default Save;
