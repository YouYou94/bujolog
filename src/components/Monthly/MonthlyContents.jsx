import { createContext } from 'react';
import MonthlyBack from './MonthlyButton/MonthlyBack.jsx';
import MonthlyNext from './MonthlyButton/MonthlyNext.jsx';

import * as Styled from './MonthlyStyled.jsx';

export const MonthlyContext = createContext();

const MonthlyContents = () => {
  const nowMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    new Date()
  );
  // 캐러셀 말고 다른 걸로 한 번 고민해보자
  return (
    <Styled.ContentsContainer>
      <Styled.ButtonContainer>
        <MonthlyBack />
        <MonthlyNext />
      </Styled.ButtonContainer>
    </Styled.ContentsContainer>
  );
};

export default MonthlyContents;
