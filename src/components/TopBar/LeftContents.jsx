import { useState } from 'react';
import NavBar from './LeftContents/NavBar.jsx';
import NavButton from './LeftContents/NavButton.jsx';
import Title from './LeftContents/Title.jsx';
import * as Styled from './TopBarStyled.jsx';

const LeftContents = () => {
  const [display, setDisplay] = useState(null);

  return (
    <Styled.TopBarContentsContainer>
      <NavButton setDisplay={setDisplay} />
      <Title />
      <NavBar display={display} setDisplay={setDisplay} />
    </Styled.TopBarContentsContainer>
  );
};

export default LeftContents;
