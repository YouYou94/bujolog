import * as Styled from './BulletKeyStyled.jsx';

const KeyAdd = () => {
  const modeIsAdd = () => {};

  return (
    <Styled.AddWrapper>
      <Styled.AddButton onClick={modeIsAdd}>Add</Styled.AddButton>
    </Styled.AddWrapper>
  );
};

export default KeyAdd;
