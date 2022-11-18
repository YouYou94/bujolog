import { ICONLIST } from '../../../Constants.jsx';
import * as Styled from './ToolStyled.jsx';

const ToolArticle = () => {
  const option = ICONLIST.map((item, index) => {
    return (
      <Styled.OptionWrapper key={index}>
        <Styled.Option icon={item} />
      </Styled.OptionWrapper>
    );
  });

  return <Styled.ToolArticle>{option}</Styled.ToolArticle>;
};

export default ToolArticle;
