import { useState } from 'react';
import Back from './BulletButton/Back.jsx';
import Save from './BulletButton/Save.jsx';
import BulletTitle from './BulletTitle/BulletTitle.jsx';
import Key from './BulletKey/Key.jsx';
import Tool from './BulletTool/Tool.jsx';
import * as Styled from './BulletStyled.jsx';

const BulletContents = () => {
  const [isTool, setIsTool] = useState(false);
  const [mode, setMode] = useState({ mode: '', id: '' });

  return (
    <Styled.ContentsContainer>
      <Styled.BulletContainer>
        <BulletTitle />
        <Key isTool={isTool} setIsTool={setIsTool} setMode={setMode} />
        <Tool
          isTool={isTool}
          setIsTool={setIsTool}
          mode={mode.mode}
          id={mode.id}
        />
      </Styled.BulletContainer>
      <Styled.ButtonContainer>
        <Back />
        <Save />
      </Styled.ButtonContainer>
    </Styled.ContentsContainer>
  );
};

export default BulletContents;
