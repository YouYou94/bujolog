import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const BulletNext = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate('/bujolog/mine');
  };

  return <Styled.Button onClick={next}>확인</Styled.Button>;
};

export default BulletNext;
