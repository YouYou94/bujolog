import * as Styled from '../../styled.jsx';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmailContact = () => {
  return (
    <Styled.TopBarContactEmail href="mailto:ybh4115@gmail.com">
      <FontAwesomeIcon icon={faEnvelope} />
    </Styled.TopBarContactEmail>
  );
};

export default EmailContact;
