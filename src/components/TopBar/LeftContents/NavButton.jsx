import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from '../TopBarStyled.jsx';

const NavButton = ({ setDisplay }) => {
  return (
    <Styled.TopBarNavButton onClick={() => setDisplay('open')}>
      <FontAwesomeIcon icon={faBarsStaggered} />
    </Styled.TopBarNavButton>
  );
};

export default NavButton;
