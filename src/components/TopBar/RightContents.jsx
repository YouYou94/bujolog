import LoginButton from './RightContents/LoginButton.jsx';
import * as Styled from './TopBarStyled.jsx';

const RightContents = () => {
  return (
    <Styled.TopBarContentsContainer>
      {/* 로그인 여부 확인하기 */}
      <LoginButton />
    </Styled.TopBarContentsContainer>
  );
};

export default RightContents;
