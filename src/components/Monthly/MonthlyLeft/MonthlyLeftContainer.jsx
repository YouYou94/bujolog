import { useState } from 'react';
import MonthlyLeftTitle from './Header/MonthlyLeftTitle.jsx';
import LeftMileStone from './Header/LeftMileStone.jsx';
import RightMileStone from './Header/RightMileStone.jsx';

import * as Styled from './MonthlyLeftStyled.jsx';
import MonthCalendar from './Section/MonthCalendar.jsx';

const MonthlyLeftContainer = () => {
  const currentYear = new Date().getFullYear();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const nowMonth = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(new Date(currentYear, currentMonth));

  return (
    <Styled.LeftContainer>
      <Styled.LeftHeader>
        <LeftMileStone
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <MonthlyLeftTitle nowMonth={nowMonth} />
        <RightMileStone
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
      </Styled.LeftHeader>
      <Styled.LeftSection>
        <MonthCalendar currentYear={currentYear} currentMonth={currentMonth} />
      </Styled.LeftSection>
    </Styled.LeftContainer>
  );
};

export default MonthlyLeftContainer;
