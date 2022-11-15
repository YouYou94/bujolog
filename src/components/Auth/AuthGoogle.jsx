import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../Firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as Styled from './AuthStyled.jsx';

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
    <Styled.Social color="rgb(66, 133, 244)" onClick={onSocialLoginWithGoogle}>
      <FontAwesomeIcon icon={faGoogle} /> Google
    </Styled.Social>
  );
};

export default GoogleLogin;
