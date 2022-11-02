import * as Styled from '../styled.jsx';
import { Mybujo, Logout } from './NavItem.jsx';

const NavBar = () => {
  return (
    <Styled.HeaderNavBar>
      <Mybujo />
      <Logout />
    </Styled.HeaderNavBar>
  );
};

export default NavBar;
