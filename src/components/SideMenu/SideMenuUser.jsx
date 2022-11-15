import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { close } from '../../store/modules/SideMenuModule.jsx';

import * as Styled from './SideMenuStyled.jsx';

const SideMenuUser = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOutSide = e => {
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

  const goMyPage = () => {
    dispatch(close());
    navigate('/bujolog/mine');
  };

  const goBulletSetting = () => {
    dispatch(close());
    navigate('/bujolog/mine/bullet');
  };

  const writeJournal = () => {
    dispatch(close());
    navigate('/bujolog/mine/journal');
  };

  return (
    <Styled.AccodianContainer ref={ref}>
      <Styled.AccodianHeader onClick={() => setIsDisplay(!isDisplay)}>
        <Styled.AccodianTitle>유저 메뉴</Styled.AccodianTitle>
      </Styled.AccodianHeader>
      <Styled.AccodianArticle isDisplay={isDisplay}>
        <Styled.AccodianItem onClick={goMyPage}>
          마이 페이지
        </Styled.AccodianItem>
        <Styled.AccodianItem onClick={goBulletSetting}>
          불렛 설정하기
        </Styled.AccodianItem>
        <Styled.AccodianItem>만다라트 (준비중)</Styled.AccodianItem>
        <Styled.AccodianItem onClick={writeJournal}>
          저널 작성하기
        </Styled.AccodianItem>
      </Styled.AccodianArticle>
    </Styled.AccodianContainer>
  );
};

export default SideMenuUser;
