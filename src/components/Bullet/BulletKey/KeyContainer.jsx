import KeyList from './KeyList.jsx';
import KeyAdd from './KeyAdd.jsx';
import * as Styled from './BulletKeyStyled.jsx';

const KeyContainer = ({ isTool, setIsTool, setMode }) => {
  return (
    <Styled.KeyContainer isUsing={isTool}>
      <KeyList isTool={isTool} setIsTool={setIsTool} setMode={setMode} />
      <KeyAdd setIsTool={setIsTool} setMode={setMode} />
    </Styled.KeyContainer>
  );
};

export default KeyContainer;
