import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './TopBarStyled.jsx';

const TopBarSideMenuBars = () => {
  return (
    <Styled.SideMenuBars>
      <FontAwesomeIcon icon={faBarsStaggered} />
    </Styled.SideMenuBars>
  );
};

export default TopBarSideMenuBars;
