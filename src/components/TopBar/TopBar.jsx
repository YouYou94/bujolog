import TopBarContact from './TopBarContact/TopBarContact.jsx';
import TopBarMenu from './TopBarMenu/TopBarMenu.jsx';
import * as Styled from './styled.jsx';

const TopBar = ({ isLogin, user }) => {
  return (
    <Styled.TopBarContainer>
      <TopBarContact />
      <TopBarMenu isLogin={isLogin} user={user} />
    </Styled.TopBarContainer>
  );
};

export default TopBar;
