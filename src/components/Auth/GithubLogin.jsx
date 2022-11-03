import * as Styled from './styled.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GithubLogin = () => {
  return (
    <Styled.AuthSocialLoginButton color="black">
      <FontAwesomeIcon icon={faGithub} /> Github
    </Styled.AuthSocialLoginButton>
  );
};

export default GithubLogin;
