import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initialBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletButtonStyled.jsx';

const Back = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goBack = () => {
    dispatch(initialBullet());
    navigate(-1);
  };

  return <Styled.Button onClick={goBack}>이전</Styled.Button>;
};

export default Back;
