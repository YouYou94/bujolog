import AuthTitle from '../components/Auth/AuthTitle.jsx';
import GithubLogin from '../components/Auth/GithubLogin.jsx';
import GoogleLogin from '../components/Auth/GoogleLogin.jsx';
import * as Styled from './styled.jsx';

const AuthPage = () => {
  return (
    <Styled.PageContainer>
      <Styled.AuthContainer>
        <AuthTitle />
        <GoogleLogin />
        <GithubLogin />
      </Styled.AuthContainer>
    </Styled.PageContainer>
  );
};

export default AuthPage;
