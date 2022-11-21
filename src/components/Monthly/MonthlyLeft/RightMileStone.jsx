import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './MonthlyLeftStyled.jsx';

const RightMileStone = () => {
  return (
    <Styled.MileStone>
      <FontAwesomeIcon icon={faChevronRight} />
    </Styled.MileStone>
  );
};

export default RightMileStone;
