import LogTitle from './Header/LogTitle.jsx';
import Goals from './Section/Goals.jsx';
import Task from './Section/Task.jsx';
import MonthlyBack from './Footer/MonthlyBack.jsx';
import MonthlyConfirm from './Footer/MonthlyConfirm.jsx';
import * as Styled from './LogStyled.jsx';

const MonthlyRightContainer = () => {
  return (
    <Styled.RightContainer>
      <Styled.RightHeader>
        <LogTitle />
      </Styled.RightHeader>
      <Styled.RightSection>
        <Goals />
        <Task />
      </Styled.RightSection>
      <Styled.RightFooter>
        <MonthlyBack />
        <MonthlyConfirm />
      </Styled.RightFooter>
    </Styled.RightContainer>
  );
};

export default MonthlyRightContainer;
