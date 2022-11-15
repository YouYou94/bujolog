import * as Styled from './AuthStyled.jsx';

const AuthId = ({ id, setId }) => {
  const onHandlerChangeId = event => setId(event.target.value);

  return (
    <Styled.Input
      type="text"
      placeholder="아이디를 입력하세요."
      value={id}
      onChange={onHandlerChangeId}
    />
  );
};

export default AuthId;
