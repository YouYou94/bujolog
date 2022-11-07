// User Menu Components
import { MyBujolog } from './MyBujolog.jsx';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

const UserMenu = ({ setDisplay }) => {
  return (
    <Styled.MenuContainer>
      <Styled.MenuTitle>사용자 메뉴</Styled.MenuTitle>
      <MyBujolog setDisplay={setDisplay} />
    </Styled.MenuContainer>
  );
};

export default UserMenu;
