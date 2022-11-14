// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// styled-components
import * as Styled from './SideMenuStyled.jsx';

const SideMenuContact = () => {
  return (
    <Styled.FooterWrapper>
      <Styled.ContactSite
        href="https://github.com/YouYou94/bujolog"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </Styled.ContactSite>
      <Styled.ContactSite href="https://velog.io/@ybh4115" target="_blank">
        <FontAwesomeIcon icon={faBlog} />
      </Styled.ContactSite>
      <Styled.ContactEmail href="mailto:ybh4115@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </Styled.ContactEmail>
    </Styled.FooterWrapper>
  );
};

export default SideMenuContact;
