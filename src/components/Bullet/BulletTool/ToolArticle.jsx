import { useContext } from 'react';
import { ICONLIST } from '../../../Constants.jsx';
import { BulletContext } from '../../../pages/BulletPage.jsx';
import * as Styled from './ToolStyled.jsx';

const ToolArticle = () => {
  const { setIsTool, setKeyIcon } = useContext(BulletContext);
  const selectIcon = event => {
    setIsTool(false);
    setKeyIcon(event.target.parentElement.id);
  };

  const option = ICONLIST.map((item, index) => {
    return (
      <Styled.OptionWrapper key={index} id={item}>
        <Styled.Option icon={item} onClick={selectIcon} />
      </Styled.OptionWrapper>
    );
  });

  return <Styled.ToolArticle>{option}</Styled.ToolArticle>;
};

export default ToolArticle;
