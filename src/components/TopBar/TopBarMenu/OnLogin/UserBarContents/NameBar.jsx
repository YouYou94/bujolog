import * as Styled from '../../TopBarMenuStyled.jsx';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NameBar = ({ user }) => {
  return (
    <>
      <Styled.TopBarUserName>{user.displayName}</Styled.TopBarUserName>
      <Styled.TopBarSpan>님</Styled.TopBarSpan>
      <Styled.TopBarSpan>
        <FontAwesomeIcon icon={faCaretDown} />
      </Styled.TopBarSpan>
    </>
  );
};

export default NameBar;
