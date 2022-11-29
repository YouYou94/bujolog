import { useContext, useEffect } from 'react';
import { useRef } from 'react';
import { BulletContext } from '../../../pages/Journal/Bullet.jsx';
import ToolArticle from './ToolArticle.jsx';
import ToolHeader from './ToolHeader.jsx';

import * as Styled from './ToolStyled.jsx';

const Tool = () => {
  const ref = useRef();
  const { isTool, setIsTool } = useContext(BulletContext);

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
    <Styled.ToolContainer using={isTool} ref={ref}>
      <ToolHeader />
      <ToolArticle />
    </Styled.ToolContainer>
  );
};

export default Tool;
