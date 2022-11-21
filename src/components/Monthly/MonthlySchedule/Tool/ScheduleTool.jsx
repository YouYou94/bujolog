import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import { addScheduled } from '../../../../store/modules/MonthlyModuls.jsx';
import * as Styled from './ScheduleStyled.jsx';

const ScheduleTool = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { currentMonth, clickDate, isTool, setIsTool } =
    useContext(MonthlyContext);
  const [schedule, setSchedule] = useState('');

  const onChangeSchedule = event => setSchedule(event.target.value);

  const onHandlerAddSchedules = () => {
    dispatch(
      addScheduled({ month: currentMonth, date: clickDate, schedule: schedule })
    );

    setIsTool(!isTool);
  };

  const handleClickOutSide = e => {
    if (isTool && !ref.current.contains(e.target)) {
      setIsTool(false);
    }
  };

  useEffect(() => {
    if (isTool) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  useEffect(() => {
    if (!isTool) setSchedule('');
  }, [isTool]);

  return (
    <Styled.ToolContainer ref={ref} using={isTool}>
      <Styled.ToolInput
        type="text"
        value={schedule}
        onChange={onChangeSchedule}
      />
      <Styled.ToolButton onClick={onHandlerAddSchedules}>
        추가
      </Styled.ToolButton>
    </Styled.ToolContainer>
  );
};

export default ScheduleTool;
