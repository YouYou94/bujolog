// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

export const ContactBlog = () => {
  return (
    <Styled.ContactSite href="https://velog.io/@ybh4115" target="_blank">
      <FontAwesomeIcon icon={faBlog} />
    </Styled.ContactSite>
  );
};
