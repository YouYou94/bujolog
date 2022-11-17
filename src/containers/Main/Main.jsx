import { Outlet } from 'react-router-dom';
import * as Styled from './MainContainerStyled.jsx';

const Main = () => {
  return (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
};

export default Main;
