import { Outlet } from 'react-router-dom';
import ProgressContainer from '../components/Make/Container/ProgressContainer.jsx';

// styled-components
import * as Styled from './PageStyled.jsx';

const MakePage = () => {
  return (
    <Styled.PageContainer>
      <ProgressContainer />
      <Outlet />
    </Styled.PageContainer>
  );
};

export default MakePage;
