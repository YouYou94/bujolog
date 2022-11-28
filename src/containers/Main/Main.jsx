import { Outlet } from 'react-router-dom';
import * as Styled from './MainStyled.jsx';

const Main = () => {
  return (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
};

export default Main;
