import * as Styled from './BulletKeyStyled.jsx';

const KeyAdd = ({ setIsTool, setMode }) => {
  const modeIsAdd = () => {
    setIsTool(true);
    setMode({ mode: 'ADD', id: null });
  };

  return (
    <Styled.AddWrapper>
      <Styled.AddButton onClick={modeIsAdd}>Add</Styled.AddButton>
    </Styled.AddWrapper>
  );
};

export default KeyAdd;
