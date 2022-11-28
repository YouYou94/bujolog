import * as Styled from './LoginStyled.jsx';

const LoginID = ({ id, setId }) => {
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

export default LoginID;
