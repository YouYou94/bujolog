import ScheduleTitle from './Header/ScheduleTitle.jsx';
import LeftMileStone from './Header/LeftMileStone.jsx';
import RightMileStone from './Header/RightMileStone.jsx';
import MonthCalendar from './Section/MonthCalendar.jsx';
import * as Styled from './ScheduleStyled.jsx';
import ScheduleTool from './Tool/ScheduleTool.jsx';

const MonthlyLeftContainer = () => {
  return (
    <Styled.Container>
      <ScheduleTool />
      <Styled.Header>
        <LeftMileStone />
        <ScheduleTitle />
        <RightMileStone />
      </Styled.Header>
      <Styled.Section>
        <MonthCalendar />
      </Styled.Section>
    </Styled.Container>
  );
};

export default MonthlyLeftContainer;
