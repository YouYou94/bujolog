import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const Next = () => {
  const navigate = useNavigate();

  const next = () => {
    navigate('');
  };

  return (
    <Styled.Button onClick={next} color="rgb(138, 43, 226)">
      다음
    </Styled.Button>
  );
};

export default Next;
