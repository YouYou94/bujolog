// Components
import SideMenuContact from '../../components/SideMenu/SideMenuContact.jsx';
import SideMenuSetting from '../../components/SideMenu/SideMenuSetting.jsx';

// styled-components
import * as Styled from './ContainerStyled.jsx';

const SideMenuFooter = () => {
  return (
    <Styled.MenuFooter>
      <SideMenuSetting />
      <SideMenuContact />
    </Styled.MenuFooter>
  );
};

export default SideMenuFooter;
