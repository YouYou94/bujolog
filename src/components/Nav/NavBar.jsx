import Menu from './Menu.jsx';
import Setting from './Setting.jsx';
import * as Styled from './NavStyled.jsx';

const NavBar = ({ display, setDisplay }) => {
  return (
    <>
      <Styled.NavBar display={display}>
        <Menu />
        <Setting setDisplay={setDisplay} />
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
