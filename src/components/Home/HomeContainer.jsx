import { customAlphabet } from 'nanoid';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIALKEY } from '../../Constants';
import HomePresenter from './HomePresenter';

const HomeContainer = () => {
  const nanoid = customAlphabet('0123456abcdefg', 8);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isDisplayInput, setIsDisplayInput] = useState(false);
  const [validMessage, setValidMessage] = useState('');

  const onHandlerClickText = () => {
    if (!localStorage.getItem('user')) setIsDisplayInput(true);
    else navigate('/bujolog/index');
  };

  const onHandlerChangeName = event => {
    const { value } = event.target;

    setValidMessage('');
    setName(value);
  };

  const onHandlerPressEnter = event => {
    const { key } = event;

    if (key === 'Enter') {
      const object = {
        name: name,
        id: nanoid(),
        key: INITIALKEY,
        monthlylog: {},
        dailylog: {},
      };

      if (!name) {
        setValidMessage('빈 이름이나 닉네임은 사용할 수 없습니다.');
        return;
      }

      localStorage.setItem('user', JSON.stringify(object));

      setIsDisplayInput(false);
      setName('');
    }
  };

  return (
    <HomePresenter
      name={name}
      isDisplayInput={isDisplayInput}
      validMessage={validMessage}
      onHandlerClickText={onHandlerClickText}
      onHandlerChangeName={onHandlerChangeName}
      onHandlerPressEnter={onHandlerPressEnter}
    />
  );
};

export default HomeContainer;
