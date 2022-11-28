import { useState } from 'react';
import LoginId from '../Login/LoginId.jsx';
import LoginPass from '../Login/LoginPass.jsx';
import LoginTitle from '../Login/LoginTitle.jsx';
import SignTitle from '../Sign/SignTitle.jsx';
import SignId from '../Sign/SignId.jsx';
import SignPass from '../Sign/SignPass.jsx';
import GoogleLogin from '../Social/GoogleLogin.jsx';
import GithubLogin from '../Social/GithubLogin.jsx';
import * as Styled from './AuthStyled.jsx';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authService } from '../../../../Firebase.js';

const Auth = () => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const [auth, setAuth] = useState('login');

  const handleOnClickChangeModeToSign = () => {
    setAuth('sign');
    setId('');
    setPass('');
  };
  const handleOnClickChangeModeToLogin = () => {
    setAuth('login');
    setId('');
    setPass('');
  };

  const handleOnClickLogin = () => {
    signInWithEmailAndPassword(authService, id, pass)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
      });

    setId('');
    setPass('');
  };
  const handleOnClickSign = () => {
    createUserWithEmailAndPassword(authService, id, pass)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode} : ${errorMessage}`);
      });

    setId('');
    setPass('');
  };

  return (
    <Styled.AuthLayout>
      {auth === 'login' ? (
        <>
          <LoginTitle />
          <LoginId id={id} setId={setId} />
          <LoginPass pass={pass} setPass={setPass} />
          <Styled.Button onClick={handleOnClickLogin}>로그인</Styled.Button>
          <Styled.Mode onClick={handleOnClickChangeModeToSign}>
            Sign?
          </Styled.Mode>
          <Styled.SocialBox>
            <GoogleLogin />
            <GithubLogin />
          </Styled.SocialBox>
        </>
      ) : (
        <>
          <SignTitle />
          <SignId id={id} setId={setId} />
          <SignPass pass={pass} setPass={setPass} />
          <Styled.Button onClick={handleOnClickSign}>회원가입</Styled.Button>
          <Styled.Mode onClick={handleOnClickChangeModeToLogin}>
            Login?
          </Styled.Mode>
        </>
      )}
    </Styled.AuthLayout>
  );
};

export default Auth;
