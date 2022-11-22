import { useRef, useState } from 'react';

import LogTitle from './Header/LogTitle.jsx';

import TabMenu from './Nav/TabMenu.jsx';
import Tasks from './Section/Tasks.jsx';
import Goals from './Section/Goals.jsx';

import MonthlyBack from './Footer/MonthlyBack.jsx';
import MonthlyConfirm from './Footer/MonthlyConfirm.jsx';

import MonthlyTool from './Tool/MonthlyTool.jsx';

import { createContext } from 'react';

import * as Styled from './LogStyled.jsx';

export const TASK = 'Task';
export const GOAL = 'goal';
export const LogContext = createContext();

const MonthlyRightContainer = () => {
  const toolRef = useRef();
  const logRef = useRef();
  const [isTool, setIsTool] = useState(false);
  const [keyIcon, setKeyIcon] = useState('');
  const [tap, setTap] = useState(TASK);

  const whatIsLog = tap === TASK ? <Tasks tap={tap} /> : <Goals tap={tap} />;

  const value = { toolRef, logRef, isTool, setIsTool, keyIcon, setKeyIcon };

  return (
    <LogContext.Provider value={value}>
      <Styled.RightContainer>
        <MonthlyTool />
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
    </LogContext.Provider>
  );
};

export default MonthlyRightContainer;
