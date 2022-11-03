import * as Styled from './styled.jsx';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GoogleLogin = () => {
  return (
    <Styled.AuthSocialLoginButton color="#4285F4">
      <FontAwesomeIcon icon={faGoogle} /> Google
    </Styled.AuthSocialLoginButton>
  );
};

export default GoogleLogin;
