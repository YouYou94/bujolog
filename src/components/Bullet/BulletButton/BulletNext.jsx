import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const BulletNext = () => {
  const navigate = useNavigate();

  const goConfirm = () => {
    navigate('/bujolog/mine');
  };

  return <Styled.Button onClick={goConfirm}>확인</Styled.Button>;
};

export default BulletNext;
