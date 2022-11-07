import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from '../TopBarStyled.jsx';

const MenuButton = ({ setDisplay }) => {
  return (
    <Styled.MenuIcon onClick={() => setDisplay('open')}>
      <FontAwesomeIcon icon={faBarsStaggered} />
    </Styled.MenuIcon>
  );
};

export default MenuButton;
