// Default Menu Components
import { BujologHome } from './BujologHome.jsx';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

const DefaultMenu = ({ setDisplay }) => {
  return (
    <Styled.MenuContainer>
      <Styled.MenuTitle>기본 메뉴</Styled.MenuTitle>
      <BujologHome setDisplay={setDisplay} />
    </Styled.MenuContainer>
  );
};

export default DefaultMenu;
