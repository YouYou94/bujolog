import { useEffect, useRef } from 'react';
import ToolTop from './ToolTop.jsx';
import * as Styled from './ToolStyled.jsx';

const Tool = ({ isTool, setIsTool, mode, id }) => {
  const ref = useRef();

  const handleClickOutSide = e => {
    if (isTool && !ref.current.contains(e.target)) {
      setIsTool(false);
    }
  };

  useEffect(() => {
    if (isTool) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <Styled.KeyToolContainer isUsing={isTool} ref={ref}>
      {isTool ? (
        <>
          <ToolTop setIsTool={setIsTool} />
          <Styled.ToolArticleWrapper></Styled.ToolArticleWrapper>
        </>
      ) : (
        <></>
      )}
    </Styled.KeyToolContainer>
  );
};

export default Tool;
