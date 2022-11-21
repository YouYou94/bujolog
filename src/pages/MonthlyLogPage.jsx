import MonthlyLeftContainer from '../components/Monthly/MonthlyLeft/MonthlyLeftContainer.jsx';
import * as Styled from './PageStyled.jsx';

const MonthlyLogPage = () => {
  return (
    <>
      <Styled.LeftLogPage>
        <MonthlyLeftContainer />
      </Styled.LeftLogPage>
      <Styled.RightLogPage></Styled.RightLogPage>
    </>
  );
};

export default MonthlyLogPage;
