import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './HeaderStyled.jsx';

const LeftMileStone = ({ currentMonth, setCurrentMonth }) => {
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
