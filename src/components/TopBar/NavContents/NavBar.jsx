import * as Styled from '../TopBarStyled.jsx';
import Menu from './Menu.jsx';
import Profile from './Profile.jsx';
import Setting from './Setting.jsx';

const NavBar = ({ user, isLogin, display, setDisplay }) => {
  return (
    <>
      <Styled.NavBar display={display}>
        <Profile />
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
