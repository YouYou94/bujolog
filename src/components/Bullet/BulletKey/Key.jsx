import { useContext, useState } from 'react';
import { BulletContext } from '../../../pages/BulletPage.jsx';

import { useDispatch } from 'react-redux';
import { delBullet, saveBullet } from '../../../store/modules/BulletModuls.jsx';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from './BulletKeyStyled.jsx';

const Key = ({ item, index }) => {
  const dispatch = useDispatch();
  const { setIsTool, setSelect, focusIndex, setFocusIndex } =
    useContext(BulletContext);
  const [description, setDescription] = useState(item.description);
  const isFocus = focusIndex === index ? true : false;

  const onChangeDescription = event => setDescription(event.target.value);

  const saveKey = event => {
    dispatch(
      saveBullet({
        id: Number(event.target.parentElement.id),
        key: item.key,
        description: description,
      })
    );
  };

  const deleteKey = event =>
    dispatch(delBullet(Number(event.target.parentElement.id)));

  const displayKeyTool = () => {
    setIsTool(true);
    setSelect(item.key);
    setFocusIndex(index);
  };

  return (
    <Styled.KeyWrapper isFocus={isFocus}>
      <Styled.IconWrapper title="Modify Icon On Click" onClick={displayKeyTool}>
        <Styled.Key icon={item.key}>
          {item.key === null ? <FontAwesomeIcon icon={faPlus} /> : ''}
        </Styled.Key>
      </Styled.IconWrapper>
      <Styled.DescriptionWrapper id={index}>
        :
        <Styled.Description
          type="text"
          defaultValue={description}
          onChange={onChangeDescription}
          placeholder="ex. 오늘 할 일, 이벤트"
        />
      </Styled.DescriptionWrapper>
      <Styled.ButtonWrapper id={index}>
        <Styled.Button onClick={saveKey}>저장</Styled.Button>
        <Styled.Button onClick={deleteKey}>삭제</Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.KeyWrapper>
  );
};

export default Key;