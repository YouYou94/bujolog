import { useContext } from 'react';
import { MyContext } from '../../App.js';

// Components
import TopBarTitle from '../../components/TopBar/TopBarTitle.jsx';
import TopBarSideMenuBars from '../../components/TopBar/TopBarSideMenuBars.jsx';
import TapBarLoginButton from '../../components/TopBar/TopBarLoginButton.jsx';
import SideMenuContainer from '../SideMenu/SideMenuContainer.jsx';

// styled-components
import * as Styled from './TopBarContainerStyled.jsx';

const TopBar = () => {
  const isLogin = useContext(MyContext).isLogin;

  return (
    <Styled.Container>
      {/* Left Element */}
      <Styled.ElementContainer>
        <TopBarSideMenuBars />
        <TopBarTitle />
        <SideMenuContainer />
      </Styled.ElementContainer>
      {/* Right Element */}
      {isLogin ? (
        <></>
      ) : (
        <Styled.ElementContainer>
          <TapBarLoginButton />
        </Styled.ElementContainer>
      )}
    </Styled.Container>
  );
};

export default TopBar;
