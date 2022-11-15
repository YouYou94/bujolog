import AuthId from '../../components/Auth/AuthId.jsx';
import AuthPassword from '../../components/Auth/AuthPassword.jsx';
import AuthButton from '../../components/Auth/AuthButton.jsx';
import * as Styled from './AuthContainerStyled.jsx';

const AuthSection = ({ id, pw, setId, setPw }) => {
  return (
    <Styled.Wrapper>
      <AuthId id={id} setId={setId} />
      <AuthPassword pw={pw} setPw={setPw} />
      <AuthButton id={id} pw={pw} />
    </Styled.Wrapper>
  );
};

export default AuthSection;
