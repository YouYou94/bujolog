import LeftContents from './LeftContents.jsx';
import MiddleContents from './MiddleContents.jsx';
import RightContents from './RightContents.jsx';
import * as Styled from './TopBarStyled.jsx';

const TopBar = ({ user, isLogin }) => {
  return (
    <Styled.TopBarContainer>
      <LeftContents isLogin={isLogin} user={user} />
      <MiddleContents />
      <RightContents isLogin={isLogin} user={user} />
    </Styled.TopBarContainer>
  );
};

export default TopBar;
