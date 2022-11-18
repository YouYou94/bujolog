import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { delBullet, saveBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletKeyStyled.jsx';

const Key = ({ item, index }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState(item.key);
  const [description, setDescription] = useState(item.description);

  const onChangeDescription = event => setDescription(event.target.value);

  const saveKey = event => {
    dispatch(
      saveBullet({
        id: Number(event.target.parentElement.id),
        key: key,
        description: description,
      })
    );
  };

  const deleteKey = event =>
    dispatch(delBullet(Number(event.target.parentElement.id)));

  return (
    <Styled.KeyWrapper>
      <Styled.IconWrapper width="4rem" title="Modify Icon On Click">
        <Styled.Key icon={item.key} />
      </Styled.IconWrapper>
      <Styled.DescriptionWrapper id={index}>
        :
        <Styled.Description
          value={description}
          onChange={onChangeDescription}
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
