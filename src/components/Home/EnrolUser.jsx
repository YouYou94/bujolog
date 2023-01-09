import { useState } from 'react';
import { customAlphabet } from 'nanoid';
import styled from 'styled-components';

export function EnrolUser() {
  const nanoid = customAlphabet('0123456abcdefg', 8);
  const [name, setName] = useState('');
  const [validMessage, setValidMessage] = useState('');

  const onHandlerChangeName = event => {
    const { value } = event.target;

    setValidMessage('');
    setName(value);
  };

  const onHandlerPressEnter = event => {
    const { key } = event;

    if (key === 'Enter') {
      const object = { name: name, id: nanoid() };

      if (!name) {
        setValidMessage('빈 이름이나 닉네임은 사용할 수 없습니다.');
        return;
      }

      localStorage.setItem('user', JSON.stringify(object));

      setName('');
    }
  };

  return (
    <EnrolBox>
      <UserInput
        value={name}
        onChange={onHandlerChangeName}
        onKeyPress={onHandlerPressEnter}
        placeholder="이름이나 닉네임을 입력해주세요."
      />
      <ValidLabel>{validMessage}</ValidLabel>
    </EnrolBox>
  );
}

export const EnrolBox = styled.div`
  width: 414px;
  height: 5rem;

  display: flex;
  flex-direction: column;
`;

export const UserInput = styled.input`
  width: 414px;
  height: 3rem;

  border: none;
  border-bottom: 1px solid white;
  padding: 0 1rem;

  font-family: 'GowunDodum';
  font-size: 1.4rem;

  background-color: transparent;
  color: white;

  outline: none;

  &::placeholder {
    color: rgb(245, 245, 245);
  }
`;

export const ValidLabel = styled.label`
  width: 414px;
  height: 1rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  color: rgb(255, 84, 84);
`;
