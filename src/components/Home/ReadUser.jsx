/*
    유저 프로필
*/

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  SubTitle,
  JournalLabel,
  JournalIndex,
} from './Styled';

export function ReadUser() {
  const navigate = useNavigate();
  const connectUser = JSON.parse(localStorage.getItem('recent-connect'));

  useEffect(() => {
    //console.log('connectUser');
    if (!connectUser) {
      navigate('/bujolog/enrol');
      //console.log('connectUser');
    }
  }, [connectUser, navigate]);

  if (connectUser)
    return (
      <Container>
        <Title>
          {connectUser.nickname}
          <SubTitle> 님의 불렛저널</SubTitle>
        </Title>
        <JournalLabel>Index</JournalLabel>
        <JournalIndex onClick={() => navigate('/bujolog/key')}>
          ──　Key Setting
        </JournalIndex>
        <JournalIndex onClick={() => navigate('/bujolog/monthly')}>
          ──　Monthly Log
        </JournalIndex>
        <JournalIndex onClick={() => navigate('/bujolog/daily')}>
          ──　Daily Log
        </JournalIndex>
      </Container>
    );
  else return null;
}
