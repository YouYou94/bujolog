// Bullet Components
import BulletOption from '../Bullet/BulletOption.jsx';
import BulletSetting from '../Bullet/BulletSetting.jsx';
import BulletTitle from '../Bullet/BulletTitle.jsx';
import BulletYours from '../Bullet/BulletYours.jsx';

// styled-components
import * as Styled from './ContainerStyled.jsx';

const BulletContainer = () => {
  return (
    <>
      <Styled.JournalMakingContainer>
        <BulletTitle />
        <BulletOption />
      </Styled.JournalMakingContainer>
      <Styled.JournalMakingContainer>
        <BulletYours />
        <BulletSetting />
      </Styled.JournalMakingContainer>
    </>
  );
};

export default BulletContainer;
