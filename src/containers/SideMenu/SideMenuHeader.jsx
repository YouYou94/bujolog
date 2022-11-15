// Components
import SideMenuTitle from '../../components/SideMenu/SideMenuTitle.jsx';

// styled-components
import * as Styled from './SideMenuContainerStyled.jsx';

const SideMenuHeader = () => {
  return (
    <Styled.MenuHeader>
      <SideMenuTitle />
    </Styled.MenuHeader>
  );
};

export default SideMenuHeader;
