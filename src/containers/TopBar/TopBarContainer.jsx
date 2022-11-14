import TopBarTitle from '../../components/TopBar/TopBarTitle.jsx';
import TopBarSideMenuBars from '../../components/TopBar/TopBarSideMenuBars.jsx';
import TapBarLoginButton from '../../components/TopBar/TopBarLoginButton.jsx';
import * as Styled from './ContainerStyled.jsx';

const TopBar = () => {
  return (
    <Styled.Container>
      {/* Left Element */}
      <Styled.ElementContainer>
        <TopBarSideMenuBars />
        <TopBarTitle />
      </Styled.ElementContainer>
      {/* Right Element */}
      <Styled.ElementContainer>
        <TapBarLoginButton />
      </Styled.ElementContainer>
    </Styled.Container>
  );
};

export default TopBar;
