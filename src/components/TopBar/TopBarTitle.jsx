import { useNavigate } from 'react-router-dom';
import * as Styled from './TopBarStyled.jsx';

const TopBarTitle = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/bujolog');

  return <Styled.Title onClick={goHome}>Bujo-log</Styled.Title>;
};

export default TopBarTitle;
