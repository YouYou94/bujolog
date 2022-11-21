import { useContext } from 'react';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import * as Styled from './HeaderStyled.jsx';

const MonthlyLeftTitle = () => {
  const { nowMonth } = useContext(MonthlyContext);
  return <Styled.LeftTitle>{nowMonth}</Styled.LeftTitle>;
};

export default MonthlyLeftTitle;
