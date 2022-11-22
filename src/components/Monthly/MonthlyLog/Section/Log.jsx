import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import { delGoal, delTask } from '../../../../store/modules/MonthlyModuls.jsx';
import { TASK } from '../LogContainer.jsx';

import * as Styled from './SectionStyled.jsx';

const Log = ({ icon, log, tap, index }) => {
  const dispatch = useDispatch();

  const { currentMonth } = useContext(MonthlyContext);
  const deleteLog = event => {
    tap === TASK
      ? dispatch(delTask({ month: currentMonth, id: event.target.id }))
      : dispatch(delGoal({ month: currentMonth, id: event.target.id }));
  };

  return (
    <Styled.ItemWrapper>
      <Styled.IconWrapper>
        <Styled.Key icon={icon} />
      </Styled.IconWrapper>
      <Styled.LogWrapper>
        <Styled.Log>{log}</Styled.Log>
      </Styled.LogWrapper>
      <Styled.ButtonWrapper>
        <Styled.Button id={index} onClick={deleteLog}>
          삭제
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.ItemWrapper>
  );
};

export default Log;
