import MonthlyCaption from '../components/Monthly/MonthlyCaption.jsx';
import MonthlyContents from '../components/Monthly/MonthlyContents.jsx';
import * as Styled from './PageStyled.jsx';

const MonthlyLogPage = () => {
  return (
    <>
      <Styled.Caption>
        <MonthlyCaption />
      </Styled.Caption>
      <Styled.Contents>
        <MonthlyContents />
      </Styled.Contents>
    </>
  );
};

export default MonthlyLogPage;
