import * as Styled from '../styled.jsx';
import Login from './NavItem/Login.jsx';
import Logout from './NavItem/Logout.jsx';
import Myjournal from './NavItem/Myjournal.jsx';

const NavBar = ({ isToggle, isLogin, user }) => {
  return (
    <Styled.HeaderNavBar isToggle={isToggle}>
      {isLogin ? (
        <>
          <Myjournal user={user} />
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
