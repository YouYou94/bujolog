import { useContext } from 'react';
import { ICONLIST } from '../../../Constants.jsx';
import { BulletContext } from '../../../pages/Journal/Bullet.jsx';
import * as Styled from './ToolStyled.jsx';

const ToolArticle = () => {
  const { setIsTool, setKeyIcon } = useContext(BulletContext);

  const selectIcon = event => {
    setIsTool(false);
    setKeyIcon(event.currentTarget.id);
  };

  const option = ICONLIST.map((item, index) => {
    return (
      <Styled.OptionWrapper key={index} id={item} onClick={selectIcon}>
        <Styled.Option icon={item} />
      </Styled.OptionWrapper>
    );
  });

  return <Styled.ToolArticle>{option}</Styled.ToolArticle>;
};

export default ToolArticle;
