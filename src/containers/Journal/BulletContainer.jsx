import BulletOption from '../../components/Bullet/BulletOption.jsx';
import BulletTitle from '../../components/Bullet/BulletTitle.jsx';
import * as Styled from './JournalContainerStyled.jsx';

const BulletContainer = () => {
  return (
    <Styled.ParentContainer>
      {/* 왼쪽 페이지 컨테이너 */}
      <Styled.ChildContainer>
        <BulletTitle />
        <BulletOption />
      </Styled.ChildContainer>
      {/* 오른쪽 페이지 컨테이너 */}
      <Styled.ChildContainer></Styled.ChildContainer>
    </Styled.ParentContainer>
  );
};

export default BulletContainer;
