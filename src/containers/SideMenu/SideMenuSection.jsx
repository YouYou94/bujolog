// Components
import SideMenuDefault from '../../components/SideMenu/SideMenuDefault.jsx';
import SideMenuUser from '../../components/SideMenu/SideMenuUser.jsx';

// styled-components
import * as Styled from './ContainerStyled.jsx';

// 로그인 여부 확인하기
const SideMenuSection = () => {
  return (
    <Styled.MenuSection>
      <SideMenuDefault />
      <SideMenuUser />
    </Styled.MenuSection>
  );
};

export default SideMenuSection;
