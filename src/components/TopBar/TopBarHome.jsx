import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import * as Styled from './TopBarComponentStyled.jsx';

const TopBarHome = () => {
  const navigate = useNavigate();

  const goHome = () => navigate('/bujolog');

  return (
    <Styled.HomeWrapper onClick={goHome}>
      <FontAwesomeIcon icon={faHouse} />
    </Styled.HomeWrapper>
  );
};

export default TopBarHome;
