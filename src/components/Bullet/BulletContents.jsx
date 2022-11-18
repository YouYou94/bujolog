import Back from './BulletButton/Back.jsx';
import Next from './BulletButton/Next.jsx';
import BulletTitle from './BulletTitle/BulletTitle.jsx';
import KeyContainer from './BulletKey/KeyContainer.jsx';
import Tool from './BulletTool/Tool.jsx';
import * as Styled from './BulletStyled.jsx';

const BulletContents = () => {
  return (
    <Styled.ContentsContainer>
      <Tool />
      <Styled.BulletContainer>
        <BulletTitle />
        <KeyContainer />
      </Styled.BulletContainer>
      <Styled.ButtonContainer>
        <Back />
        <Next />
      </Styled.ButtonContainer>
    </Styled.ContentsContainer>
  );
};

export default BulletContents;
