import * as Styled from './BulletStyled.jsx';
import { ICONLIST } from '../../Constants.jsx';

const BulletOption = () => {
  const settingBullet = () => {};

  const option = ICONLIST.map((item, index) => {
    return (
      <Styled.Option key={index} onClick={settingBullet}>
        <Styled.OptionItem icon={item} />
      </Styled.Option>
    );
  });

  return <Styled.OptionWrapper>{option}</Styled.OptionWrapper>;
};

export default BulletOption;
