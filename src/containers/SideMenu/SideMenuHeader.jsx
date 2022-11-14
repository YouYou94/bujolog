// Components
import SideMenuTitle from '../../components/SideMenu/SideMenuTitle.jsx';

// styled-components
import * as Styled from './ContainerStyled.jsx';

const SideMenuHeader = () => {
  return (
    <Styled.MenuHeader>
      <SideMenuTitle />
    </Styled.MenuHeader>
  );
};

export default SideMenuHeader;
