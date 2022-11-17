import EmailLogin from './EmailLogin.jsx';
import GithubLogin from './GithubLogin.jsx';
import GoogleLogin from './GoogleLogin.jsx';
import * as Styled from './AuthStyled.jsx';

const AuthLogin = () => {
  return (
    <Styled.LoginWrapper>
      <EmailLogin />
      <GoogleLogin />
      <GithubLogin />
    </Styled.LoginWrapper>
  );
};

export default AuthLogin;
