// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

export const ContactGithub = () => {
  return (
    <Styled.ContactSite
      href="https://github.com/YouYou94/bujolog"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </Styled.ContactSite>
  );
};
