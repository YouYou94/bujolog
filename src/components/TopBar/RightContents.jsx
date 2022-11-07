import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LoginContext } from '../../Context/Context.jsx';
import LoginButton from './RightContents/LoginButton.jsx';
import StartButton from './RightContents/StartButton.jsx';
import * as Styled from '../../styled/TopBarStyled.jsx';

const RightContents = () => {
  const pathName = useLocation().pathname;

  const isLogin = useContext(LoginContext);

  return (
    <Styled.TopBarContentsContainer>
      {/* 로그인 여부 확인하기 */}
      {isLogin ? (
        pathName === '/bujolog' ? (
          <StartButton />
        ) : (
          <></>
        )
      ) : (
        <LoginButton />
      )}
    </Styled.TopBarContentsContainer>
  );
};

export default RightContents;
