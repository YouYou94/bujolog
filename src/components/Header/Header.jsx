import * as Styled from './styled.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Title from './Title/Title.jsx';

const Header = () => {
  return (
    <Styled.HeaderContainer>
      <Title />
      <NavBar />
    </Styled.HeaderContainer>
  );
};

export default Header;
