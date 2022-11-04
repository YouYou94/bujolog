import { useNavigate } from 'react-router-dom';
import * as Styled from './styled.jsx';

const AuthTitle = () => {
  const navigate = useNavigate();

  return (
    <Styled.AuthPageTitle onClick={() => navigate('/bujolog')}>
      Bujo-log
    </Styled.AuthPageTitle>
  );
};

export default AuthTitle;
