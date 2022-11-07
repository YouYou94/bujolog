// Menu Header Components
// Menu Section Components
// Menu Footer Components
import Contact from './MenuFooter/ContactItem/Contact.jsx';

// styled-components
import * as Styled from './MenuStyled.jsx';

export const MenuHeader = () => {
  return <Styled.MenuHeaderContainer></Styled.MenuHeaderContainer>;
};

export const MenuSection = () => {
  return <Styled.MenuSectionContainer></Styled.MenuSectionContainer>;
};

export const MenuFooter = ({ setDisplay }) => {
  return (
    <Styled.MenuFooterContainer>
      <Contact />
    </Styled.MenuFooterContainer>
  );
};
