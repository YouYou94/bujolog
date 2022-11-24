import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { DailyContext } from '../WriteContainer.jsx';
import * as Styled from './WriteSectionStyled.jsx';

const DailyLog = () => {
  const { addRef, toolRef, isTool, setIsTool, keyIcon } =
    useContext(DailyContext);
  const [isAdd, setIsAdd] = useState(false);
  const [dailyLog, setDailyLog] = useState('');

  const usingTool = () => setIsTool(!isTool);

  const handleOnChangeLog = event => setDailyLog(event.target.value);

  const handleOnClickAddDailyLog = () => {
    console.log(dailyLog);
  };

  const handleOnKeyPressDailyLog = event => {
    if (event.key === 'Enter') handleOnClickAddDailyLog();
  };

  // 해당 영역 밖으로 나가면 Tool 메뉴 안 보이게
  const handleClickOutSide = event => {
    if (isAdd && !addRef.current.contains(event.target)) {
      setIsAdd(false);
    }
  };

  useEffect(() => {
    if (isAdd) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <Styled.DailyLogLayout>
      <Styled.LogBox>
        <Styled.AddBox ref={addRef}>
          {isAdd ? (
            <Styled.AddItem>
              <Styled.KeyWrapper onClick={usingTool}>
                <Styled.Key icon={keyIcon}>
                  {keyIcon ? '' : <FontAwesomeIcon icon={faPlus} />}
                </Styled.Key>
              </Styled.KeyWrapper>
              <Styled.LogInput
                value={dailyLog}
                onChange={handleOnChangeLog}
                onKeyPress={handleOnKeyPressDailyLog}
              />
              <Styled.ButtonWrapper>
                <Styled.AddButton onClick={handleOnClickAddDailyLog}>
                  추가하기
                </Styled.AddButton>
              </Styled.ButtonWrapper>
            </Styled.AddItem>
          ) : (
            <Styled.AddButton onClick={() => setIsAdd(!isAdd)}>
              클릭하여 추가하기
            </Styled.AddButton>
          )}
        </Styled.AddBox>
      </Styled.LogBox>
    </Styled.DailyLogLayout>
  );
};

export default DailyLog;
