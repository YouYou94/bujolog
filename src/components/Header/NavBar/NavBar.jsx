import * as Styled from '../styled.jsx';
import { Mybujo, Logout, Login } from './NavItem.jsx';

const NavBar = ({ isToggle, isLogin, setIsLogin }) => {
  return (
    <Styled.HeaderNavBar isToggle={isToggle}>
      {isLogin ? (
        <>
          <Mybujo />
          <Logout />
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </Styled.HeaderNavBar>
  );
};

export default NavBar;
