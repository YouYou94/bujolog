import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../../Firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as Styled from './SocialStyled.jsx';

const GoogleLogin = () => {
  const navigate = useNavigate();

  const onSocialLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authService, provider)
      .then(result => console.log(result))
      .catch(error => console.log(error));

    navigate('/bujolog');
  };

  return (
    <Styled.LoginButton
      onClick={onSocialLoginWithGoogle}
      color="rgb(66, 133, 244)"
    >
      <FontAwesomeIcon icon={faGoogle} /> Google Login
    </Styled.LoginButton>
  );
};

export default GoogleLogin;
