import { createContext, useEffect } from 'react';
import { useState } from 'react';
import ScheduleContainer from '../components/Monthly/MonthlySchedule/ScheduleContainer.jsx';
import LogContainer from '../components/Monthly/MonthlyLog/LogContainer.jsx';
import * as Styled from './PageStyled.jsx';

export const MonthlyContext = createContext();

const MonthlyLogPage = () => {
  const currentYear = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [clickDate, setClickDate] = useState('');
  const nowMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(new Date(currentYear, currentMonth));

  const [isTool, setIsTool] = useState(false);

  const [isTransform, setIsTransForm] = useState(false);

  const value = {
    currentYear,
    currentMonth,
    setCurrentMonth,
    nowMonth,
    isTool,
    setIsTool,
    clickDate,
    setClickDate,
  };

  useEffect(() => {
    if (!isTool) setClickDate('');
  }, [isTool]);

  return (
    <>
      <MonthlyContext.Provider value={value}>
        <Styled.LeftLogPage>
          <ScheduleContainer />
        </Styled.LeftLogPage>
        <Styled.RightLogPage isTransform={isTransform}>
          <LogContainer />
        </Styled.RightLogPage>
        <Styled.PageTransform
          isTransform={isTransform}
          onClick={() => setIsTransForm(!isTransform)}
        >
          {isTransform ? '< Schedule' : 'Log >'}
        </Styled.PageTransform>
      </MonthlyContext.Provider>
    </>
  );
};

export default MonthlyLogPage;
