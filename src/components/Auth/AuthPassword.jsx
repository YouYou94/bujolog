import * as Styled from './AuthStyled.jsx';

const AuthPassword = ({ pw, setPw }) => {
  const onHandlerChangePw = event => setPw(event.target.value);

  return (
    <Styled.Input
      type="password"
      placeholder="비밀번호를 입력하세요."
      value={pw}
      onChange={onHandlerChangePw}
    />
  );
};

export default AuthPassword;
