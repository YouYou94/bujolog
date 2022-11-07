// Menu Header Components
import UserName from './MenuHeader/UserName.jsx';
import MenuBarTitle from './MenuHeader/MenuBarTitle.jsx';

// Menu Section Components
import DefaultMenu from './MenuSection/DefaultItem/DefaultMenu.jsx';
import UserMenu from './MenuSection/UserItem/UserMenu.jsx';

// Menu Footer Components
import Contact from './MenuFooter/ContactItem/Contact.jsx';
import Setting from './MenuFooter/SettingItem/Setting.jsx';

// Context
import { useContext } from 'react';
import { LoginContext } from '../../Context/Context.jsx';

// styled-components
import * as Styled from './MenuStyled.jsx';

export const MenuHeader = ({ setDisplay }) => {
  const isLogin = useContext(LoginContext);

  return (
    <Styled.MenuHeaderContainer>
      <MenuBarTitle />
      {isLogin ? <UserName setDisplay={setDisplay} /> : <></>}
    </Styled.MenuHeaderContainer>
  );
};

export const MenuSection = ({ setDisplay }) => {
  const isLogin = useContext(LoginContext);

  return (
    <Styled.MenuSectionContainer>
      <DefaultMenu setDisplay={setDisplay} />
      {isLogin ? <UserMenu setDisplay={setDisplay} /> : <></>}
    </Styled.MenuSectionContainer>
  );
};

export const MenuFooter = ({ setDisplay }) => {
  return (
    <Styled.MenuFooterContainer>
      <Setting setDisplay={setDisplay} />
      <Contact />
    </Styled.MenuFooterContainer>
  );
};
