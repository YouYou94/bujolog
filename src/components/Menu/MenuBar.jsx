// Menu Contents Components
import { MenuFooter, MenuHeader, MenuSection } from './MenuContents.jsx';

// styled-components
import * as Styled from './MenuStyled.jsx';

// Redux로 prop drilling 해결하기!
const NavBar = ({ display, setDisplay }) => {
  return (
    <>
      <Styled.MenuBar display={display}>
        <MenuHeader />
        <MenuSection />
        <MenuFooter setDisplay={setDisplay} />
      </Styled.MenuBar>
      {/* 
          메
          뉴
          여
          백 
            */}
      {display === 'open' ? (
        <Styled.MenuBarWhiteSpace
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
