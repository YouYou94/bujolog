import NonLoginProfile from './ProfileItem/NonLoginProfile.jsx';
import OnLoginProfile from './ProfileItem/OnLoginProfile.jsx';
import * as Styled from './NavContentsStyled.jsx';
import { useContext } from 'react';
import { LoginContext } from '../../../Context/Context.jsx';

// 프로필 이미지 나중에 로그인 접속자에 따라 변경하기

const Profile = () => {
  const isLogin = useContext(LoginContext);

  return (
    <Styled.ProfileContainer>
      {isLogin ? <OnLoginProfile /> : <NonLoginProfile />}
    </Styled.ProfileContainer>
  );
};

export default Profile;
