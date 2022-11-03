import TopBarContact from './TopBarContact/TopBarContact.jsx';
import TopBarMenu from './TopBarMenu/TopBarMenu.jsx';
import * as Styled from './styled.jsx';

const TopBar = ({ isLogin }) => {
  return (
    <Styled.TopBarContainer>
      <TopBarContact />
      <TopBarMenu isLogin={isLogin} />
    </Styled.TopBarContainer>
  );
};

export default TopBar;
