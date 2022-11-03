import * as Styled from './styled.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../Firebase.js';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';

const GithubLogin = () => {
  const navigate = useNavigate();
  const onSocialLoginWithGithub = async () => {
    const provider = new GithubAuthProvider();

    await signInWithPopup(authService, provider)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    navigate('/bujolog');
  };

  return (
    <Styled.AuthSocialLoginButton
      color="black"
      onClick={onSocialLoginWithGithub}
    >
      <FontAwesomeIcon icon={faGithub} /> Github
    </Styled.AuthSocialLoginButton>
  );
};

export default GithubLogin;
