import LeftContents from './LeftContents.jsx';
import MiddleContents from './MiddleContents.jsx';
import RightContents from './RightContents.jsx';
import * as Styled from './TopBarStyled.jsx';

const TopBar = () => {
  return (
    <Styled.TopBarContainer>
      <LeftContents />
      <MiddleContents />
      <RightContents />
    </Styled.TopBarContainer>
  );
};

export default TopBar;
