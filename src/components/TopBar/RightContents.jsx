import { useLocation } from 'react-router-dom';
import LoginButton from './RightContents/LoginButton.jsx';
import StartButton from './RightContents/StartButton.jsx';
import * as Styled from './TopBarStyled.jsx';

const RightContents = ({ isLogin }) => {
  const pathName = useLocation().pathname;

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
