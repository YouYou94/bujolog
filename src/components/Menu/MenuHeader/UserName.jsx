import { useContext } from 'react';
import { UserContext } from '../../../Context/Context.jsx';

// styled-componets
import * as Styled from '../MenuStyled.jsx';

const UserName = ({ setDisplay }) => {
  const user = useContext(UserContext);

  return (
    <>
      <Styled.UserNameWrap onClick={() => setDisplay('close')}>
        <Styled.UserName>{user ? user.displayName : ''}</Styled.UserName> 님
      </Styled.UserNameWrap>
    </>
  );
};

export default UserName;
