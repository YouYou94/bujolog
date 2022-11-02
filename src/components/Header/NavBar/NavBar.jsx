import * as Styled from '../styled.jsx';
import { Home, Bujotalk, Mybujo, Logout } from './NavItem.jsx';

const NavBar = () => {
  return (
    <Styled.HeaderNavBar>
      <Home />
      <Mybujo />
      <Bujotalk />
      <Logout />
    </Styled.HeaderNavBar>
  );
};

export default NavBar;
