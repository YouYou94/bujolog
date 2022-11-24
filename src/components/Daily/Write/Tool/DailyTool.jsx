import { useEffect, useContext } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import * as Styled from './ToolStyled.jsx';
import { DailyContext } from '../WriteContainer.jsx';

const DailyTool = () => {
  const { addRef, toolRef, isTool, setIsTool, setKeyIcon } =
    useContext(DailyContext);

  const userKey = useSelector(state => state.bullet.bullet);

  const selectKey = event => {
    setKeyIcon(event.currentTarget.id);
    setIsTool(false);
  };

  // 해당 영역 밖으로 나가면 Tool 메뉴 안 보이게
  const handleClickOutSide = event => {
    if (
      isTool &&
      !addRef.current.contains(event.target) &&
      !toolRef.current.contains(event.target)
    ) {
      setIsTool(false);
    }
  };

  useEffect(() => {
    if (isTool) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  const userKeyList = userKey.map(option => {
    const { key, description } = option;

    return (
      <Styled.OptionWrapper
        key={nanoid()}
        title={description}
        onClick={selectKey}
        id={key}
      >
        <Styled.Option icon={key} />
      </Styled.OptionWrapper>
    );
  });

  return (
    <Styled.ToolContainer ref={toolRef} using={isTool}>
      <Styled.ToolTitle>Yours Key</Styled.ToolTitle>
      <Styled.ToolArticle>{userKeyList}</Styled.ToolArticle>
    </Styled.ToolContainer>
  );
};

export default DailyTool;
