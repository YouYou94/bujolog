/*
  사용자 등록

  - Input에 사용자 입력
  - 로컬스토리지에 사용자 저장
  - 최근 연결한 사용자 저장
*/

import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { Container, Title, Input } from './Styled';

export const EnrolUser = () => {
  const nanoid = customAlphabet('0123456789abcedfghi', 8);
  const [nickname, setNickname] = useState('');

  const onHandlerChangeNickname = event => {
    const { value } = event.target;

    setNickname(value);
  };

  const onHandlerKeyPressEnter = event => {
    if (event.key === 'Enter') {
      if (!localStorage.getItem('user')) {
        const user = [{ nickname: nickname, id: nanoid() }];

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('recent-connect', JSON.stringify(user));
      } else {
        const userList = JSON.parse(localStorage.getItem('user'));
        const user = { nickname: nickname, id: nanoid() };
        userList.push(user);

        localStorage.setItem('user', JSON.stringify(userList));
        localStorage.setItem('recent-connect', JSON.stringify(user));
      }

      setNickname('');
    }
  };

  return (
    <Container>
      <Title>사용자 만들기</Title>
      <Input
        value={nickname}
        onChange={onHandlerChangeNickname}
        onKeyPress={onHandlerKeyPressEnter}
        placeholder="사용하실 이름이나 닉네임을 입력해주세요."
      />
    </Container>
  );
};
