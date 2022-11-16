import { useDispatch, useSelector } from 'react-redux';
import { addBullet, delBullet } from '../../store/modules/BulletModuls.jsx';
import { ICONLIST } from '../../Constants.jsx';
import * as Styled from './BulletStyled.jsx';

const BulletSelect = () => {
  const common = useSelector(state => state.bullet.commonState);
  //   const user = useSelector(state => state.bullet.userState);
  const dispatch = useDispatch();
  //   console.log('common', common);
  //   console.log('user', user);
  const onHandlerAddBullet = () => {
    dispatch(addBullet({ key: '', name: '', value: '' }));
  };

  const onHandlerDelBullet = event => {
    dispatch(delBullet(Number(event.target.parentElement.id)));
  };

  const list = common.bullet.map((item, index) => {
    return (
      <Styled.BulletList id={index} key={index}>
        <Styled.Icon icon={item.key} />
        <Styled.Name>{item.name}</Styled.Name>
        <Styled.Description>{item.description}</Styled.Description>
        <Styled.DeleteButton onClick={onHandlerDelBullet}>
          삭제
        </Styled.DeleteButton>
      </Styled.BulletList>
    );
  });

  return (
    <Styled.SelectWrapper>
      <Styled.SelectTitle>your key</Styled.SelectTitle>
      <Styled.Wrapper>
        {list}
        <Styled.AddWrapper>
          <Styled.Add onClick={onHandlerAddBullet}>+</Styled.Add>
        </Styled.AddWrapper>
      </Styled.Wrapper>
    </Styled.SelectWrapper>
  );
};

export default BulletSelect;
