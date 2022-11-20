import BulletBack from './BulletButton/BulletBack.jsx';
import BulletNext from './BulletButton/BulletNext.jsx';
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
        <BulletBack />
        <BulletNext />
      </Styled.ButtonContainer>
    </Styled.ContentsContainer>
  );
};

export default BulletContents;
