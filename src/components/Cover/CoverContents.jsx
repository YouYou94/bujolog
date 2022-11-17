import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import * as Styled from './CoverStyled.jsx';

const CoverContents = () => {
  const navigate = useNavigate();
  const isLogin = useContext(MyContext).isLogin;

  const goAuth = () => navigate('bujolog/auth/login');

  return (
    <>
      {isLogin ? (
        <Styled.ContentsWrapper></Styled.ContentsWrapper>
      ) : (
        <Styled.ContentsWrapper>
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
          <Styled.Space />
          <Styled.Button onClick={goAuth}>시작 하기</Styled.Button>
        </Styled.ContentsWrapper>
      )}
    </>
  );
};

export default CoverContents;
