import * as Styled from './styled.jsx';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../Firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
    <Styled.AuthSocialLoginButton
      color="#4285F4"
      onClick={onSocialLoginWithGoogle}
    >
      <FontAwesomeIcon icon={faGoogle} /> Google
    </Styled.AuthSocialLoginButton>
  );
};

export default GoogleLogin;
