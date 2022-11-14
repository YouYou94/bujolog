import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { close } from '../../store/modules/SideMenuModule.jsx';

import * as Styled from './SideMenuStyled.jsx';

const SideMenuUser = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();

  const handleClickOutSide = e => {
    //console.log('유저메뉴', ref.current.contains(e.target));
    if (isDisplay && !ref.current.contains(e.target)) {
      setIsDisplay(false);
    }
  };

  useEffect(() => {
    if (isDisplay) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });
  console.log('유저메뉴:', isDisplay);

  return (
    <Styled.AccodianContainer ref={ref}>
      <Styled.AccodianHeader onClick={() => setIsDisplay(!isDisplay)}>
        <Styled.AccodianTitle>유저 메뉴</Styled.AccodianTitle>
      </Styled.AccodianHeader>
      <Styled.AccodianArticle isDisplay={isDisplay}>
        <Styled.AccodianItem onClick={() => dispatch(close())}>
          메뉴 01
        </Styled.AccodianItem>
        <Styled.AccodianItem onClick={() => dispatch(close())}>
          메뉴 02
        </Styled.AccodianItem>
        <Styled.AccodianItem onClick={() => dispatch(close())}>
          메뉴 03
        </Styled.AccodianItem>
      </Styled.AccodianArticle>
    </Styled.AccodianContainer>
  );
};

export default SideMenuUser;
