import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import { Container, Title, Input } from './EnrolUserStyled.jsx';

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
        const object = [{ nickname: nickname, id: nanoid() }];

        localStorage.setItem('user', JSON.stringify(object));
      } else {
        const object = JSON.parse(localStorage.getItem('user'));
        object.push({ nickname: nickname, id: nanoid() });

        localStorage.setItem('user', JSON.stringify(object));
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
