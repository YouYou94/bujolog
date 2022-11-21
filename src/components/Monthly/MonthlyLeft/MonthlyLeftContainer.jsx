import MonthlyLeftTitle from './Header/MonthlyLeftTitle.jsx';
import LeftMileStone from './Header/LeftMileStone.jsx';
import RightMileStone from './Header/RightMileStone.jsx';

import * as Styled from './MonthlyLeftStyled.jsx';
import MonthCalendar from './Section/MonthCalendar.jsx';

const MonthlyLeftContainer = () => {
  return (
    <Styled.LeftContainer>
      <Styled.LeftHeader>
        <LeftMileStone />
        <MonthlyLeftTitle />
        <RightMileStone />
      </Styled.LeftHeader>
      <Styled.LeftSection>
        <MonthCalendar />
      </Styled.LeftSection>
    </Styled.LeftContainer>
  );
};

export default MonthlyLeftContainer;
