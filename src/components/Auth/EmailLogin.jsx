import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './AuthStyled.jsx';

const EmailLogin = () => {
  return (
    <Styled.LoginButton color="rgb(255, 90, 14)">
      <FontAwesomeIcon icon={faEnvelope} /> Email Login
    </Styled.LoginButton>
  );
};

export default EmailLogin;
