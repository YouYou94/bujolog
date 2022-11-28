import * as Styled from './LoginStyled.jsx';

const LoginPass = ({ pass, setPass }) => {
  const handleOnChangePass = event => setPass(event.target.value);

  return (
    <Styled.Input
      type="password"
      value={pass}
      onChange={handleOnChangePass}
      placeholder="비밀 번호를 입력해주세요."
    />
  );
};

export default LoginPass;
