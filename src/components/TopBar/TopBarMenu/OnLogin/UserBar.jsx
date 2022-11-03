import * as Styled from '../TopBarMenuStyled.jsx';
import MenuBar from './UserBarContents/MenuBar.jsx';
import NameBar from './UserBarContents/NameBar.jsx';

const UserBar = ({ user }) => {
  return (
    <Styled.TopBarUserMenu>
      <NameBar user={user} />
      <MenuBar />
    </Styled.TopBarUserMenu>
  );
};

export default UserBar;
