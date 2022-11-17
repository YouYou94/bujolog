import * as Styled from './ToolStyled.jsx';

const ToolTop = ({ setIsTool }) => {
  return (
    <Styled.ToolTopWrapper>
      <Styled.ToolTitle>Key Tool</Styled.ToolTitle>
      <Styled.ToolButton onClick={() => setIsTool(false)}>
        Exit
      </Styled.ToolButton>
    </Styled.ToolTopWrapper>
  );
};

export default ToolTop;
