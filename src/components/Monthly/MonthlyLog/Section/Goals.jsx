import { useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { MonthlyContext } from '../../../../pages/Journal/MonthlyLog.jsx';
import { LogContext } from '../LogContainer.jsx';
import Log from './Log.jsx';
import LogAdd from './LogAdd.jsx';
import * as Styled from './SectionStyled.jsx';

const Goals = ({ tap }) => {
  const { currentMonth } = useContext(MonthlyContext);
  const { setKeyIcon } = useContext(LogContext);
  const goalList = useSelector(state => state.monthly[currentMonth].goals);

  const [showAdd, setShowAdd] = useState(false);

  const goal = goalList.map((item, index) => {
    const { icon, log } = item;
    return <Log key={nanoid()} icon={icon} log={log} tap={tap} index={index} />;
  });

  useEffect(() => {
    if (!showAdd) setKeyIcon('');
  });

  return (
    <Styled.SectionContainer>
      <Styled.LogItemContainer>
        {goal}
        {showAdd ? (
          <LogAdd tap={tap} showAdd={showAdd} setShowAdd={setShowAdd} />
        ) : (
          <Styled.AddLogWrapper>
            <Styled.AddLogButton onClick={() => setShowAdd(!showAdd)}>
              클릭하여 추가하기
            </Styled.AddLogButton>
          </Styled.AddLogWrapper>
        )}
      </Styled.LogItemContainer>
    </Styled.SectionContainer>
  );
};

export default Goals;
