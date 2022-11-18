import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const Back = () => {
  const navigate = useNavigate();

  return <Styled.Button onClick={() => navigate(-1)}>이전</Styled.Button>;
};

export default Back;
