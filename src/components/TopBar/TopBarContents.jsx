import { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

// TopBar Contents Components
import MenuButton from './Contents/MenuButton.jsx';
import Title from './Contents/Title.jsx';
import NavBar from '../Nav/NavBar.jsx';
import StartButton from './Contents/StartButton.jsx';
import LoginButton from './Contents/LoginButton.jsx';

// Context
import { LoginContext } from '../../Context/Context.jsx';

// styled-components
import * as Styled from './TopBarStyled.jsx';

// Left Contents
export const LeftContents = () => {
  const [display, setDisplay] = useState(null);

  return (
    <Styled.ContentsContainer>
      <MenuButton setDisplay={setDisplay} />
      <Title />
      <NavBar display={display} setDisplay={setDisplay} />
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

  const isLogin = useContext(LoginContext);

  return (
    <Styled.ContentsContainer>
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
    </Styled.ContentsContainer>
  );
};
