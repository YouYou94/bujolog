import { useContext } from 'react';
import { AuthContext } from '../../../App.js';
import blank from '../../../img/Profile/blank.png';
import * as Styled from './ProfileStyled.jsx';

const ProfileImage = () => {
  const user = useContext(AuthContext).user;

  const profile = user ? (user.phothURL ? user.phothURL : blank) : '';

  return (
    <Styled.ProfileImageBox>
      <Styled.Image image={profile} />
    </Styled.ProfileImageBox>
  );
};

export default ProfileImage;
