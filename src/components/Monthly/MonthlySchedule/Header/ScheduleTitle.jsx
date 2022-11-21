import { useContext } from 'react';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import * as Styled from './HeaderStyled.jsx';

const ScheduleTitle = () => {
  const { nowMonth } = useContext(MonthlyContext);

  return <Styled.Title>{nowMonth}</Styled.Title>;
};

export default ScheduleTitle;
