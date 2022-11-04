import { useState } from 'react';
import NavBar from './NavContents/NavBar.jsx';
import NavButton from './LeftContents/NavButton.jsx';
import Title from './LeftContents/Title.jsx';
import * as Styled from './TopBarStyled.jsx';

const LeftContents = ({ isLogin, user }) => {
  const [display, setDisplay] = useState(null);

  return (
    <Styled.TopBarContentsContainer>
      <NavButton setDisplay={setDisplay} />
      <Title />
      <NavBar
        user={user}
        isLogin={isLogin}
        display={display}
        setDisplay={setDisplay}
      />
    </Styled.TopBarContentsContainer>
  );
};

export default LeftContents;
