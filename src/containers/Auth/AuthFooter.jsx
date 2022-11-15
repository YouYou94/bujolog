import AuthGoogle from '../../components/Auth/AuthGoogle.jsx';
import AuthGithub from '../../components/Auth/AuthGithub.jsx';
import * as Styled from './AuthContainerStyled.jsx';

const AuthFooter = () => {
  return (
    <Styled.Wrapper direction="row">
      <AuthGoogle />
      {'|'}
      <AuthGithub />
    </Styled.Wrapper>
  );
};

export default AuthFooter;
