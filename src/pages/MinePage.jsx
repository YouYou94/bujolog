// User Components

//Redux
import { useSelector, useDispatch } from 'react-redux';

// styled-components
import * as Styled from './PageStyled.jsx';

const MinePage = () => {
  const display = useSelector(state => state.topBarMenuReducer);
  const journal = useSelector(state => state.jourReducer);

  console.log('display');
  console.log(display);
  console.log('journal');
  console.log(journal);

  return (
    <Styled.PageContainer>
      <Styled.MinePageContainer>나의 페이지</Styled.MinePageContainer>
    </Styled.PageContainer>
  );
};

export default MinePage;
