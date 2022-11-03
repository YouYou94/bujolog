import * as Styled from '../../TopBarMenuStyled.jsx';
import Logout from './Logout.jsx';
import Mybujo from './Mybujo.jsx';

const MenuBar = ({ url }) => {
  return (
    <Styled.TopBarUserMenuBar>
      <Mybujo url={url} />
      <Logout />
    </Styled.TopBarUserMenuBar>
  );
};

export default MenuBar;
