import { useContext } from 'react';
import { UserContext } from '../../../../Context/Context.jsx';
import * as Styled from '../NavContentsStyled.jsx';

const OnLoginProfile = () => {
  const user = useContext(UserContext);
  return (
    <>
      <Styled.ProfilePicture></Styled.ProfilePicture>
      <Styled.ProfileUserName>{user.displayName}</Styled.ProfileUserName>
      <Styled.ProfileButton>프로필 수정</Styled.ProfileButton>
    </>
  );
};

export default OnLoginProfile;
