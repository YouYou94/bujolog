import { Link } from 'react-router-dom';
import * as Styled from './BulletStyled.jsx';

const BulletProgress = () => {
  return (
    <Styled.BulletProgressWrap>
      <Link to="/bujolog/make">
        <Styled.BulletProgressButton>이전</Styled.BulletProgressButton>
      </Link>
      <Link to="/bujolog/make/monthly">
        <Styled.BulletProgressButton>다음</Styled.BulletProgressButton>
      </Link>
    </Styled.BulletProgressWrap>
  );
};

export default BulletProgress;
