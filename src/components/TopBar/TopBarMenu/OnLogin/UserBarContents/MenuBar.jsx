import * as Styled from '../../TopBarMenuStyled.jsx';
import Logout from './Logout.jsx';
import Mybujo from './Mybujo.jsx';

const MenuBar = () => {
  return (
    <Styled.TopBarUserMenuBar>
      <Mybujo />
      <Logout />
    </Styled.TopBarUserMenuBar>
  );
};

export default MenuBar;
