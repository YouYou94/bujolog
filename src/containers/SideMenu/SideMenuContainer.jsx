// Containers
import SideMenuHeader from './SideMenuHeader.jsx';
import SideMenuFooter from './SideMenuFooter.jsx';
import SideMenuSection from './SideMenuSection.jsx';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { close } from '../../store/modules/SideMenuModule.jsx';

// styled-components
import * as Styled from './ContainerStyled.jsx';

const SideMenuContainer = () => {
  const display = useSelector(state => state.sideMenu.display);
  const dispatch = useDispatch();

  const closeMenu = () => dispatch(close());

  return (
    <>
      <Styled.MenuContainer display={display}>
        <SideMenuHeader />
        <SideMenuSection />
        <SideMenuFooter />
      </Styled.MenuContainer>
      {display === 'open' ? (
        <Styled.MenuWhiteSpace onClick={closeMenu} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SideMenuContainer;
