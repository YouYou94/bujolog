import { useDispatch, useSelector } from 'react-redux';
import { delBullet } from '../../../store/modules/BulletModuls.jsx';
import * as Styled from './BulletKeyStyled.jsx';

const KeyList = ({ isTool, setIsTool, setMode }) => {
  const bullet = useSelector(state => state.bullet.commonState.bullet);
  const dispatch = useDispatch();

  const modeIsUpdate = event => {
    setIsTool(true);
    setMode({ mode: 'UPD', id: Number(event.target.parentElement.id) });
  };

  const keyList = bullet.map((item, index) => {
    return (
      <Styled.KeyWrapper key={index}>
        <Styled.Key icon={item.key} />
        <Styled.Name>{item.name}</Styled.Name>
        <Styled.Description>{item.description}</Styled.Description>
        <Styled.ButtonWrapper id={index}>
          <Styled.Button onClick={modeIsUpdate}>변경</Styled.Button>
          <Styled.Button
            onClick={event =>
              dispatch(delBullet(Number(event.target.parentElement.id)))
            }
          >
            삭제
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.KeyWrapper>
    );
  });

  return keyList;
};

export default KeyList;
