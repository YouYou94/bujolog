import { createContext } from 'react';
import { useState } from 'react';
import MonthlyLeftContainer from '../components/Monthly/MonthlyLeft/MonthlyLeftContainer.jsx';
import MonthlyRightContainer from '../components/Monthly/MonthlyRight/MonthlyRightContainer.jsx';
import * as Styled from './PageStyled.jsx';

export const MonthlyContext = createContext();

const MonthlyLogPage = () => {
  const currentYear = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const nowMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(new Date(currentYear, currentMonth));

  const value = { currentYear, currentMonth, setCurrentMonth, nowMonth };

  return (
    <>
      <MonthlyContext.Provider value={value}>
        <Styled.LeftLogPage>
          <MonthlyLeftContainer />
        </Styled.LeftLogPage>
        <Styled.RightLogPage>
          <MonthlyRightContainer />
        </Styled.RightLogPage>
      </MonthlyContext.Provider>
    </>
  );
};

export default MonthlyLogPage;
