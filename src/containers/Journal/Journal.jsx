import { Outlet } from 'react-router-dom';
import * as Styled from './JournalStyled.jsx';

const Journal = () => {
  return (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
};

export default Journal;
