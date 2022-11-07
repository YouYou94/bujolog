// Contents Components
import {
  LeftContents,
  MiddleContents,
  RightContents,
} from './TopBarContents.jsx';

// styled-components
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
