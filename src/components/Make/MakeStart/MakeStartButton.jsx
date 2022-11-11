import { Link } from 'react-router-dom';
import * as Styled from './MakeStartStyled.jsx';

const MakeStartButton = () => {
  return (
    <Styled.MakeStartButtonWrap>
      <Link to="bullet">
        <Styled.MakeStartButton>시작하기</Styled.MakeStartButton>
      </Link>
    </Styled.MakeStartButtonWrap>
  );
};

export default MakeStartButton;
