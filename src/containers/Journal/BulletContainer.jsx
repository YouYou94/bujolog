// Bullet Components
import BulletOption from '../../components/Bullet/BulletOption.jsx';
import BulletSelect from '../../components/Bullet/BulletSelect.jsx';
import BulletSetting from '../../components/Bullet/BulletSetting.jsx';
import BulletTitle from '../../components/Bullet/BulletTitle.jsx';

// styled components
import * as Styled from './JournalContainerStyled.jsx';

const BulletContainer = () => {
  return (
    <Styled.ParentContainer>
      {/* 왼쪽 페이지 컨테이너 */}
      <Styled.ChildContainer borderline="true">
        <BulletTitle />
        <BulletOption />
      </Styled.ChildContainer>
      {/* 오른쪽 페이지 컨테이너 */}
      <Styled.ChildContainer>
        <BulletSelect />
        <BulletSetting />
      </Styled.ChildContainer>
    </Styled.ParentContainer>
  );
};

export default BulletContainer;
