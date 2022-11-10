import { useState } from 'react';
import { useLocation } from 'react-router-dom';

// TopBar Contents Components
import MenuButton from './Contents/MenuButton.jsx';
import Title from './Contents/Title.jsx';
import MenuBar from '../Menu/MenuBar.jsx';
import StartButton from './Contents/StartButton.jsx';
import LoginButton from './Contents/LoginButton.jsx';

// Redux
import { useSelector } from 'react-redux';

// styled-components
import * as Styled from './TopBarStyled.jsx';

// Left Contents
export const LeftContents = () => {
  const [display, setDisplay] = useState(null);

  return (
    <Styled.ContentsContainer>
      <MenuButton setDisplay={setDisplay} />
      <Title />
      <MenuBar display={display} setDisplay={setDisplay} />
    </Styled.ContentsContainer>
  );
};

// Middle Contents
export const MiddleContents = () => {
  return <Styled.ContentsContainer></Styled.ContentsContainer>;
};

// Right Contents
export const RightContents = () => {
  const pathName = useLocation().pathname;
  const isLogin = useSelector(state => state.isLoginReducer.login);

  // 오른쪽 사이트 컨텐츠 무엇을 넣을까 고민해보자
  return (
    <Styled.ContentsContainer>
      {/* 로그인 여부 확인하기 */}
      {isLogin ? pathName === '/bujolog' ? <></> : <></> : <LoginButton />}
    </Styled.ContentsContainer>
  );
};
