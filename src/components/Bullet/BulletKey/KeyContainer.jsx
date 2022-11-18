import KeyList from './KeyList.jsx';
import KeyAdd from './KeyAdd.jsx';
import * as Styled from './BulletKeyStyled.jsx';

const KeyContainer = () => {
  return (
    <Styled.KeyContainer>
      <KeyList />
      <KeyAdd />
    </Styled.KeyContainer>
  );
};

export default KeyContainer;