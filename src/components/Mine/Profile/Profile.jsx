import ProfileImage from './ProfileImage.jsx';
import ProfileInfo from './ProfileInfo.jsx';
import * as Styled from './ProfileStyled.jsx';

const Profile = () => {
  return (
    <Styled.ProfileBox>
      <ProfileImage />
      <ProfileInfo />
    </Styled.ProfileBox>
  );
};

export default Profile;
