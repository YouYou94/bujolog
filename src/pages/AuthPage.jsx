import AuthCaption from '../components/Auth/AuthCaption.jsx';
import AuthLogin from '../components/Auth/AuthLogin.jsx';
import * as Styled from './PageStyled.jsx';

const AuthPage = () => {
  return (
    <>
      <Styled.Caption>
        <AuthCaption />
      </Styled.Caption>
      <Styled.Contents>
        <AuthLogin />
      </Styled.Contents>
    </>
  );
};

export default AuthPage;
