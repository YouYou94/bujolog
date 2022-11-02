import * as Styled from '../styled.jsx';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Toggle = ({ isToggle, setIsToggle }) => {
  return (
    <Styled.HeaderToggleWrapper onClick={() => setIsToggle(!isToggle)}>
      {isToggle ? (
        <FontAwesomeIcon icon={faX} />
      ) : (
        <FontAwesomeIcon icon={faBars} />
      )}
    </Styled.HeaderToggleWrapper>
  );
};

export default Toggle;
