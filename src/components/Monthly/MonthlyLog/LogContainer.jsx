import { useState } from 'react';

import LogTitle from './Header/LogTitle.jsx';

import TabMenu from './Nav/TabMenu.jsx';
import Tasks from './Section/Tasks.jsx';
import Goals from './Section/Goals.jsx';

import MonthlyBack from './Footer/MonthlyBack.jsx';
import MonthlyConfirm from './Footer/MonthlyConfirm.jsx';

import * as Styled from './LogStyled.jsx';

export const TASK = 'Task';
export const GOAL = 'goal';

const MonthlyRightContainer = () => {
  const [tap, setTap] = useState(TASK);

  const whatIsLog = tap === TASK ? <Tasks /> : <Goals />;

  return (
    <Styled.RightContainer>
      <Styled.RightHeader>
        <LogTitle />
      </Styled.RightHeader>
      <Styled.RightSection>
        <TabMenu tap={tap} setTap={setTap} />
        {whatIsLog}
      </Styled.RightSection>
      <Styled.RightFooter>
        <MonthlyBack />
        <MonthlyConfirm />
      </Styled.RightFooter>
    </Styled.RightContainer>
  );
};

export default MonthlyRightContainer;
