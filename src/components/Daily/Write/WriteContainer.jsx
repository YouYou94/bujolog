import { useRef } from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import WriteBack from './Footer/WriteBack.jsx';
import WriteConfirm from './Footer/WriteConfirm.jsx';
import WriteTitle from './Header/WriteTitle.jsx';
import DailyLog from './Section/DailyLog.jsx';
import * as Styled from './WriteStyled.jsx';

export const Today = new Date();
export const DailyContext = createContext();

const WriteContainer = () => {
  const addRef = useRef();
  const toolRef = useRef();
  const [isTool, setIsTool] = useState(false);
  const [keyIcon, setKeyIcon] = useState('');

  const value = { addRef, toolRef, isTool, setIsTool, keyIcon, setKeyIcon };

  return (
    <DailyContext.Provider value={value}>
      <Styled.Container>
        <Styled.WriteHeader>
          <WriteTitle />
        </Styled.WriteHeader>
        <Styled.WriteSection>
          <DailyLog />
        </Styled.WriteSection>
        <Styled.WriteFooter>
          <WriteBack />
          <WriteConfirm />
        </Styled.WriteFooter>
      </Styled.Container>
    </DailyContext.Provider>
  );
};

export default WriteContainer;
