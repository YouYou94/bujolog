import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App.js';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './CoverStyled.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CoverContents = () => {
  const navigate = useNavigate();
  const isLogin = useContext(MyContext).isLogin;

  const goAuth = () => navigate('auth/login');

  const goJournal = () => navigate('mine/bullet');

  return (
    <Styled.ContentsContainer>
      <Styled.LetterWrapper>
        <Styled.Emphasis>Bullet Journal</Styled.Emphasis>
        <Styled.Letter>'불렛 저널'</Styled.Letter>
        <Styled.Space />
        <Styled.Emphasis>Bullet Key</Styled.Emphasis>
        <Styled.Letter>'기호'</Styled.Letter>
        <Styled.Space />
        <Styled.Emphasis>Future</Styled.Emphasis>
        <Styled.Letter>'미래'</Styled.Letter>
        <Styled.Space />
        <Styled.Emphasis>Journal Log</Styled.Emphasis>
        <Styled.Letter>'자신만의 기록'</Styled.Letter>
      </Styled.LetterWrapper>
      <Styled.ButtonWrapper>
        <Styled.Button onClick={goJournal}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.ContentsContainer>
  );
};

export default CoverContents;
