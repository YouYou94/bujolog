import { updateProfile } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../App.js';
import { authService } from '../../../Firebase.js';
import * as Styled from './ProfileStyled.jsx';

const ProfileInfo = () => {
  const navigate = useNavigate();

  const user = useContext(AuthContext).user;

  const [isChange, setIsChange] = useState(false);
  const [username, setUserName] = useState('');

  const handleOnClickChangeUserInfo = async () => {
    await updateProfile(authService.currentUser, { displayName: username });

    setIsChange(false);
  };

  const handleOnClickLogout = async () => {
    if (window.confirm('로그아웃하시겠습니까?')) {
      await authService.signOut();

      navigate('/bujolog');
    }
  };

  useEffect(() => {
    if (user) {
      const name = user.name ? user.name : '클릭하여 이름 설정하기';
      setUserName(name);
    }
  }, [user]);

  return (
    <Styled.ProfileInfoBox>
      <Styled.InfoText>
        이름 :{' '}
        {isChange ? (
          <>
            <Styled.NameInput
              value={username}
              onChange={event => setUserName(event.target.value)}
            />
            <Styled.ProfileButton onClick={handleOnClickChangeUserInfo}>
              확인
            </Styled.ProfileButton>
          </>
        ) : (
          <>
            <Styled.EmphasisText
              title="클릭하여 수정하기"
              onClick={() => setIsChange(true)}
            >
              {username}
            </Styled.EmphasisText>
          </>
        )}
      </Styled.InfoText>
      <Styled.SignBox>
        <Styled.Logout onClick={handleOnClickLogout}>로그아웃</Styled.Logout>
      </Styled.SignBox>
    </Styled.ProfileInfoBox>
  );
};

export default ProfileInfo;
