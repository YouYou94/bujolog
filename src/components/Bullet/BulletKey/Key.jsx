import { useDispatch } from 'react-redux';
import { delBullet } from '../../../store/modules/BulletModule.jsx';

import * as Styled from './BulletKeyStyled.jsx';

const Key = ({ item, index }) => {
  const dispatch = useDispatch();

  const deleteKey = event =>
    dispatch(delBullet(Number(event.target.parentElement.id)));

  return (
    <Styled.KeyWrapper>
      <Styled.IconWrapper title="Modify Icon On Click">
        <Styled.Key icon={item.key} />
      </Styled.IconWrapper>
      <Styled.DescriptionWrapper id={index}>
        :<Styled.Description>{item.description}</Styled.Description>
      </Styled.DescriptionWrapper>
      <Styled.ButtonWrapper id={index}>
        <Styled.Button onClick={deleteKey}>삭제</Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.KeyWrapper>
  );
};

export default Key;
