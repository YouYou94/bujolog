import BulletKey from '../Bullet/BulletKey.jsx';
import BulletProgress from '../Bullet/BulletProgress.jsx';
import BulletTitle from '../Bullet/BulletTitle.jsx';
import * as Styled from './ContainerStyled.jsx';

const BulletContainer = () => {
  return (
    <Styled.JournalMakingContainer>
      <BulletTitle />
      <BulletKey />
      <BulletProgress />
    </Styled.JournalMakingContainer>
  );
};

export default BulletContainer;
