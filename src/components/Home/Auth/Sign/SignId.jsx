import * as Styled from './SignStyled.jsx';

const SignId = ({ id, setId }) => {
  const handleOnChangeId = event => setId(event.target.value);

  return (
    <Styled.Input
      type="text"
      value={id}
      onChange={handleOnChangeId}
      placeholder="이메일 형식의 아이디를 입력해주세요."
    />
  );
};

export default SignId;
