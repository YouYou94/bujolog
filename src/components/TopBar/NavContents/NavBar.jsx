import Menu from './Menu.jsx';
import Profile from './Profile.jsx';
import Setting from './Setting.jsx';
import * as Styled from './NavContentsStyled.jsx';

const NavBar = ({ user, isLogin, display, setDisplay }) => {
  return (
    <>
      <Styled.NavBar display={display}>
        <Profile user={user} isLogin={isLogin} />
        <Menu />
        <Setting isLogin={isLogin} setDisplay={setDisplay} />
      </Styled.NavBar>
      {display === 'open' ? (
        <Styled.NavBarWhiteSpace
          onClick={() => {
            setDisplay('close');
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default NavBar;
