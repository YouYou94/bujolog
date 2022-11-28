import * as Styled from './SignStyled';

const SignPass = ({ pass, setPass }) => {
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

export default SignPass;
