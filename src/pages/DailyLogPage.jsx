import WriteContainer from '../components/Daily/Write/WriteContainer.jsx';
import * as Styled from './PageStyled.jsx';

const DailyLogPage = () => {
  return (
    <>
      <Styled.AdditionPage></Styled.AdditionPage>
      <Styled.WritePage>
        <WriteContainer />
      </Styled.WritePage>
    </>
  );
};

export default DailyLogPage;
