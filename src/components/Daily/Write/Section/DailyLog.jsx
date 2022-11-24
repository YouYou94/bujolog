import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { DailyContext, Today } from '../WriteContainer.jsx';
import * as Styled from './WriteSectionStyled.jsx';
import {
  addDailyLog,
  checkTodayLog,
} from '../../../../store/modules/DailyModule.jsx';

const DailyLog = () => {
  const dispatch = useDispatch();
  const { addRef, toolRef, isTool, setIsTool, keyIcon, setKeyIcon } =
    useContext(DailyContext);
  const [isAdd, setIsAdd] = useState(false);
  const [dailyLog, setDailyLog] = useState('');
  const today = `${Today.getMonth() + 1}${Today.getDate()}`;
  const dailyState = useSelector(state => state.daily.daily);

  // 기능
  const usingTool = () => setIsTool(!isTool);

  const handleOnChangeLog = event => setDailyLog(event.target.value);

  const handleOnClickAddDailyLog = () => {
    if (keyIcon && dailyLog) {
      if (!dailyState[`${today}`]) dispatch(checkTodayLog({ today: today }));

      dispatch(addDailyLog({ today: today, icon: keyIcon, log: dailyLog }));

      setIsAdd(false);
    }
  };

  const handleOnClickDelDailyLog = () => {};

  const handleOnKeyPressDailyLog = event => {
    if (event.key === 'Enter') handleOnClickAddDailyLog();
  };

  // 해당 영역 밖으로 나가면 Tool 메뉴 안 보이게
  const handleClickOutSide = event => {
    if (
      isAdd &&
      !addRef.current.contains(event.target) &&
      !toolRef.current.contains(event.target)
    ) {
      setIsAdd(false);
    }
  };

  useEffect(() => {
    if (isAdd) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  const initialSetState = () => {
    setKeyIcon('');
    setDailyLog('');
    setIsTool(false);
  };

  useEffect(() => {
    if (!isAdd) initialSetState();
  });

  const dailyLogList = dailyState[`${today}`]
    ? dailyState[`${today}`].map(item => {
        const { icon, log } = item;

        return (
          <Styled.DailyBox key={nanoid()}>
            <Styled.Key icon={icon} />
            <Styled.Log>{log}</Styled.Log>
            <Styled.ButtonWrapper>
              <Styled.SettingButton
                onClick={handleOnClickDelDailyLog}
                log={true}
              >
                삭제하기
              </Styled.SettingButton>
            </Styled.ButtonWrapper>
          </Styled.DailyBox>
        );
      })
    : '';

  return (
    <Styled.DailyLogLayout>
      <Styled.LogBox>
        {dailyLogList}
        <Styled.DailyBox ref={addRef}>
          {isAdd ? (
            <>
              <Styled.AddKey icon={keyIcon} onClick={usingTool}>
                {keyIcon ? '' : <FontAwesomeIcon icon={faPlus} />}
              </Styled.AddKey>
              <Styled.LogInput
                value={dailyLog}
                onChange={handleOnChangeLog}
                onKeyPress={handleOnKeyPressDailyLog}
              />
              <Styled.ButtonWrapper>
                <Styled.SettingButton onClick={handleOnClickAddDailyLog}>
                  추가하기
                </Styled.SettingButton>
              </Styled.ButtonWrapper>
            </>
          ) : (
            <Styled.AddButton onClick={() => setIsAdd(!isAdd)}>
              클릭하여 추가하기
            </Styled.AddButton>
          )}
        </Styled.DailyBox>
      </Styled.LogBox>
    </Styled.DailyLogLayout>
  );
};

export default DailyLog;
