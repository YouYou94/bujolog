import { useNavigate } from 'react-router-dom';
import * as Styled from './AuthStyled.jsx';

const AuthTitle = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/bujolog');

  return <Styled.Title onClick={goHome}>Bujo-log</Styled.Title>;
};

export default AuthTitle;
