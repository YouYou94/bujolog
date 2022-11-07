import { useNavigate } from 'react-router-dom';
import * as Styled from '../TopBarStyled';

const Title = () => {
  const navigate = useNavigate();
  return (
    <Styled.Title onClick={() => navigate('/bujolog')}>Bujo-log</Styled.Title>
  );
};

export default Title;
