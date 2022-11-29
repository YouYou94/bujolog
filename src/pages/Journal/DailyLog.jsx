import WriteContainer from '../../components/Daily/Write/WriteContainer.jsx';
import * as Styled from './JournalStyled.jsx';

const DailyLog = () => {
  return (
    <>
      <Styled.AdditionPage></Styled.AdditionPage>
      <Styled.WritePage>
        <WriteContainer />
      </Styled.WritePage>
    </>
  );
};

export default DailyLog;
