import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Redux
import { useDispatch } from 'react-redux';
import { open } from '../../store/modules/SideMenuModule.jsx';

import * as Styled from './TopBarStyled.jsx';

const TopBarSideMenuBars = () => {
  const dispatch = useDispatch();

  const openSideMenu = () => dispatch(open());

  return (
    <Styled.SideMenuBars>
      <FontAwesomeIcon icon={faBarsStaggered} onClick={openSideMenu} />
    </Styled.SideMenuBars>
  );
};

export default TopBarSideMenuBars;
