import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { MonthlyContext } from '../../../../pages/MonthlyLogPage.jsx';
import * as Styled from './HeaderStyled.jsx';

const LeftMileStone = () => {
  const { currentMonth, setCurrentMonth } = useContext(MonthlyContext);

  const goPrevMonth = () => {
    if (currentMonth > 0) setCurrentMonth(currentMonth - 1);
  };

  return (
    <Styled.MileStone onClick={goPrevMonth}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Styled.MileStone>
  );
};

export default LeftMileStone;
