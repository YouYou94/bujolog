import { useNavigate } from 'react-router-dom';
import * as Styled from './CoverStyled.jsx';

const Cover = () => {
  const navigate = useNavigate();

  const handleOnClickGoMine = () => navigate('mine');

  return (
    <Styled.CoverLayout>
      <Styled.LetterBox>
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
      </Styled.LetterBox>
      <Styled.ButtonBox>
        <Styled.Button onClick={handleOnClickGoMine}>시작하기</Styled.Button>
      </Styled.ButtonBox>
    </Styled.CoverLayout>
  );
};

export default Cover;
