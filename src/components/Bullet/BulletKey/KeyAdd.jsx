import { useDispatch } from 'react-redux';
import { addBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletKeyStyled.jsx';

const KeyAdd = () => {
  const dispatch = useDispatch();

  const CreateDefaultBullet = () =>
    dispatch(addBullet({ key: null, description: '', save: false }));

  return (
    <Styled.AddWrapper>
      <Styled.AddButton onClick={CreateDefaultBullet}>Add</Styled.AddButton>
    </Styled.AddWrapper>
  );
};

export default KeyAdd;
