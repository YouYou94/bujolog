import { useNavigate } from 'react-router-dom';
import * as Styled from './BulletButtonStyled.jsx';

const Back = () => {
  const navigate = useNavigate();

  return <Styled.Button onClick={() => navigate(-1)}>Back</Styled.Button>;
};

export default Back;
