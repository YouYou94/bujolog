import * as Styled from '../styled.jsx';
import { Mybujo, Logout } from './NavItem.jsx';

const NavBar = ({ isToggle }) => {
  return (
    <Styled.HeaderNavBar isToggle={isToggle}>
      <Mybujo />
      <Logout />
    </Styled.HeaderNavBar>
  );
};

export default NavBar;
