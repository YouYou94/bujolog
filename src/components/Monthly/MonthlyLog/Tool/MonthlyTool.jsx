import { useEffect, useContext } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { LogContext } from '../LogContainer.jsx';
import * as Styled from './ToolStyled.jsx';

const MonthlyTool = () => {
  const { toolRef, logRef, isTool, setIsTool, setKeyIcon } =
    useContext(LogContext);
  const userKey = useSelector(state => state.bullet.bullet);

  const selectKey = event => {
    setIsTool(!isTool);
    setKeyIcon(event.currentTarget.id);
  };

  const handleClickOutSide = e => {
    if (
      isTool &&
      !toolRef.current.contains(e.target) &&
      !logRef.current.contains(e.target)
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

export default MonthlyTool;
