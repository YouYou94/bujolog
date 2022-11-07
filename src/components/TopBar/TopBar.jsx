import LeftContents from './LeftContents.jsx';
import MiddleContents from './MiddleContents.jsx';
import RightContents from './RightContents.jsx';
import * as Styled from './TopBarStyled.jsx';

const TopBar = ({ user }) => {
  return (
    <Styled.TopBarContainer>
      <LeftContents user={user} />
      <MiddleContents />
      <RightContents />
    </Styled.TopBarContainer>
  );
};

export default TopBar;
