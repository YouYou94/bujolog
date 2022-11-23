import WriteBack from './Footer/WriteBack.jsx';
import WriteConfirm from './Footer/WriteConfirm.jsx';
import WriteTitle from './Header/WriteTitle.jsx';
import DailyLog from './Section/DailyLog.jsx';
import * as Styled from './WriteStyled.jsx';

export const Today = new Date();

const WriteContainer = () => {
  return (
    <Styled.Container>
      <Styled.WriteHeader>
        <WriteTitle />
      </Styled.WriteHeader>
      <Styled.WriteSection>
        <DailyLog />
      </Styled.WriteSection>
      <Styled.WriteFooter>
        <WriteBack />
        <WriteConfirm />
      </Styled.WriteFooter>
    </Styled.Container>
  );
};

export default WriteContainer;
