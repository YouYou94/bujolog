import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './HeaderStyled.jsx';

const LeftMileStone = () => {
  return (
    <Styled.MileStone>
      <FontAwesomeIcon icon={faChevronLeft} />
    </Styled.MileStone>
  );
};

export default LeftMileStone;
