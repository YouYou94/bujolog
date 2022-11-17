import BulletCaption from '../components/Bullet/BulletCaption.jsx';
import BulletContents from '../components/Bullet/BulletContents.jsx';
import * as Styled from './PageStyled.jsx';

const BulletPage = () => {
  return (
    <>
      <Styled.Caption>
        <BulletCaption />
      </Styled.Caption>
      <Styled.Contents>
        <BulletContents />
      </Styled.Contents>
    </>
  );
};

export default BulletPage;
