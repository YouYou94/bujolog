// Redux
import { useSelector } from 'react-redux';

// styled-componets
import * as Styled from '../MenuStyled.jsx';

const UserName = ({ setDisplay }) => {
  const user = useSelector(state => state.userReducer);

  return (
    <>
      <Styled.UserNameWrap onClick={() => setDisplay('close')}>
        <Styled.UserName>{user ? user.name : ''}</Styled.UserName> 님
      </Styled.UserNameWrap>
    </>
  );
};

export default UserName;
