// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// styled-components
import * as Styled from '../../MenuStyled.jsx';

export const ContactEmail = () => {
  return (
    <Styled.ContactEmail href="mailto:ybh4115@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} />
    </Styled.ContactEmail>
  );
};
