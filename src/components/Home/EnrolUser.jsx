/*
  사용자 등록

  - Input에 사용자 입력
  - 로컬스토리지에 사용자 저장
  - 최근 연결한 사용자 저장
*/

import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { Container, Title, Input, ValidLabel, ChangeLabel } from './Styled';

export const EnrolUser = ({ setIsEnrol }) => {
  const nanoid = customAlphabet('0123456789abcedfghi', 8);
  const [nickname, setNickname] = useState('');
  const [valid, setValid] = useState('');

  const onHandlerChangeNickname = event => {
    const { value } = event.target;

    setValid('');
    setNickname(value);
  };

  const onHandlerKeyPressEnter = event => {
    const userList = JSON.parse(localStorage.getItem('user'));

    /* 유효성 검사 */
    if (!nickname) {
      setValid('사용자명이 비어있습니다!');
      return;
    }

    if (userList && userList.includes(nickname)) {
      setValid('동일한 사용자명이 있습니다!');
      return;
    }

    if (event.key === 'Enter') {
      const now = new Date();

      if (!userList) {
        const user = [
          {
            nickname: nickname,
            id: nanoid(),
            last_connect: now.toLocaleDateString(),
          },
        ];

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('recent-connect', JSON.stringify(user));
      } else {
        const user = {
          nickname: nickname,
          id: nanoid(),
          last_connect: now.toLocaleDateString(),
        };
        userList.push(user);

        localStorage.setItem('user', JSON.stringify(userList));
        localStorage.setItem('recent-connect', JSON.stringify(user));
      }

      alert('사용자 등록이 완료되었습니다!');

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
        placeholder="사용자명을 입력해주세요."
      />
      <ValidLabel>{valid}</ValidLabel>
      <ChangeLabel onClick={() => setIsEnrol(false)}>
        혹시 등록되어 있는 정보가 있으신가요? →
      </ChangeLabel>
    </Container>
  );
};
