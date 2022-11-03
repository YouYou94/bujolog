import { useNavigate } from 'react-router-dom';
import * as Styled from '../styled.jsx';

const Title = () => {
  const navigate = useNavigate();

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderTitle onClick={() => navigate('/bujolog')}>
        bujo-log
      </Styled.HeaderTitle>
    </Styled.HeaderWrapper>
  );
};

export default Title;
