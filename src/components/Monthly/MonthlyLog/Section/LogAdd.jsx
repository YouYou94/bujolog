import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useContext, useEffect } from 'react';
import { LogContext, TASK } from '../LogContainer.jsx';
import { MonthlyContext } from '../../../../pages/Journal/MonthlyLog.jsx';
import * as Styled from './SectionStyled.jsx';
import { useDispatch } from 'react-redux';
import { addGoal, addTask } from '../../../../store/modules/MonthlyModule.jsx';

const LogAdd = ({ tap, showAdd, setShowAdd }) => {
  const dispatch = useDispatch();
  const { currentMonth } = useContext(MonthlyContext);
  const { toolRef, logRef, isTool, setIsTool, keyIcon } =
    useContext(LogContext);

  const [log, setLog] = useState('');

  const addLogTask = () => {
    if (keyIcon && log) {
      dispatch(addTask({ month: currentMonth, icon: keyIcon, log: log }));
      setShowAdd(false);
    }
    setIsTool(false);
  };

  const addLogGoal = () => {
    if (keyIcon && log) {
      dispatch(addGoal({ month: currentMonth, icon: keyIcon, log: log }));
      setShowAdd(false);
    }
    setIsTool(false);
  };

  const usingTool = () => setIsTool(!isTool);

  const handleClickOutSide = e => {
    if (
      showAdd &&
      !logRef.current.contains(e.target) &&
      !toolRef.current.contains(e.target)
    ) {
      setShowAdd(false);
    }
  };

  useEffect(() => {
    if (showAdd) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <Styled.AddItemWrapper ref={logRef}>
      <Styled.AddIconWrapper title="Add Icon On Click">
        <Styled.AddKey onClick={usingTool} icon={keyIcon}>
          {keyIcon ? '' : <FontAwesomeIcon icon={faPlus} />}
        </Styled.AddKey>
      </Styled.AddIconWrapper>
      <Styled.LogWrapper>
        :
        <Styled.AddLog
          type="text"
          value={log}
          onClick={() => setIsTool(false)}
          onChange={event => setLog(event.target.value)}
        />
      </Styled.LogWrapper>
      <Styled.ButtonWrapper>
        <Styled.AddButton onClick={tap === TASK ? addLogTask : addLogGoal}>
          추가
        </Styled.AddButton>
      </Styled.ButtonWrapper>
    </Styled.AddItemWrapper>
  );
};

export default LogAdd;
