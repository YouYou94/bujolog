import { useNavigate } from 'react-router-dom';
import * as Styled from '../TopBarStyled';

const Title = () => {
  const navigate = useNavigate();
  return (
    <Styled.TopBarTitle onClick={() => navigate('/bujolog')}>
      Bujo-log
    </Styled.TopBarTitle>
  );
};

export default Title;
