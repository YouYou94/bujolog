import { Outlet } from 'react-router-dom';
import * as Styled from './PageStyled.jsx';

const MyPage = () => {
  return (
    <Styled.PageContainer>
      <Outlet />
    </Styled.PageContainer>
  );
};

export default MyPage;
