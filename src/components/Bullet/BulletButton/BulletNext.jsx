import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const BulletNext = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate('/bujolog/mine/monthly');
  };

  return <Styled.Button onClick={next}>다음</Styled.Button>;
};

export default BulletNext;
