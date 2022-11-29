import { useDispatch } from 'react-redux';
import { addBullet } from '../../../store/modules/BulletModule.jsx';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useContext, useState } from 'react';
import { BulletContext } from '../../../pages/Journal/Bullet.jsx';

import * as Styled from './BulletKeyStyled.jsx';

const KeyAdd = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const { setIsTool, keyIcon, setKeyIcon } = useContext(BulletContext);

  const addBulletKey = () => {
    if (keyIcon && description) {
      dispatch(
        addBullet({ key: keyIcon, description: description, save: true })
      );
      setDescription('');
      setKeyIcon('');
    }
  };

  const usingTool = () => setIsTool(true);

  return (
    <Styled.AddKeyWrapper>
      <Styled.AddIconWrapper title="Add Icon On Click" onClick={usingTool}>
        <Styled.AddKey icon={keyIcon}>
          {keyIcon ? '' : <FontAwesomeIcon icon={faPlus} />}
        </Styled.AddKey>
      </Styled.AddIconWrapper>
      <Styled.DescriptionWrapper>
        :
        <Styled.AddDescription
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="ex. 오늘 할 일, 이벤트"
        />
      </Styled.DescriptionWrapper>
      <Styled.ButtonWrapper>
        <Styled.AddButton onClick={addBulletKey}>추가</Styled.AddButton>
      </Styled.ButtonWrapper>
    </Styled.AddKeyWrapper>
  );
};

export default KeyAdd;
