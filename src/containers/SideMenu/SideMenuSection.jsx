import { useContext } from 'react';
import { MyContext } from '../../App.js';

// Components
import SideMenuDefault from '../../components/SideMenu/SideMenuDefault.jsx';
import SideMenuUser from '../../components/SideMenu/SideMenuUser.jsx';

// styled-components
import * as Styled from './SideMenuContainerStyled.jsx';

// 로그인 여부 확인하기
const SideMenuSection = () => {
  const isLogin = useContext(MyContext).isLogin;

  return (
    <Styled.MenuSection>
      <SideMenuDefault />
      {isLogin ? <SideMenuUser /> : <></>}
    </Styled.MenuSection>
  );
};

export default SideMenuSection;
