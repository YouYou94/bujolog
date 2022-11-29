import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { MonthlyContext } from '../../../../pages/Journal/MonthlyLog.jsx';
import * as Styled from './HeaderStyled.jsx';

const RightMileStone = () => {
  const { currentMonth, setCurrentMonth } = useContext(MonthlyContext);

  const goNextMonth = () => {
    if (currentMonth < 11) setCurrentMonth(currentMonth + 1);
  };

  return (
    <Styled.MileStone onClick={goNextMonth}>
      <FontAwesomeIcon icon={faChevronRight} />
    </Styled.MileStone>
  );
};

export default RightMileStone;
