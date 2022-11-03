import { useState } from 'react';
import * as Styled from './styled.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Title from './Title/Title.jsx';
import Toggle from './NavBar/Toggle.jsx';

const Header = ({ isLogin, user }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Styled.HeaderContainer>
      <Title />
      <NavBar isToggle={isToggle} isLogin={isLogin} user={user} />
      <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
    </Styled.HeaderContainer>
  );
};

export default Header;
