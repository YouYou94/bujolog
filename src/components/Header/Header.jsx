import * as Styled from './styled.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Title from './Title/Title.jsx';
import Toggle from './NavBar/Toggle.jsx';

const Header = ({ isToggle, setIsToggle }) => {
  return (
    <Styled.HeaderContainer>
      <Title />
      <NavBar isToggle={isToggle} />
      <Toggle isToggle={isToggle} setIsToggle={setIsToggle} />
    </Styled.HeaderContainer>
  );
};

export default Header;
