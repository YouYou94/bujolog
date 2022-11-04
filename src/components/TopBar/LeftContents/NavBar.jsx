import * as Styled from '../TopBarStyled.jsx';

const NavBar = ({ display, setDisplay }) => {
  return (
    <>
      <Styled.TopBarNavBar display={display}></Styled.TopBarNavBar>
      {display === 'open' ? (
        <Styled.TopBarNavBarWhiteSpace
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
