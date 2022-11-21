import MonthlyLeftTitle from './MonthlyLeftTitle.jsx';
import LeftMileStone from './LeftMileStone.jsx';
import RightMileStone from './RightMileStone.jsx';

import * as Styled from './MonthlyLeftStyled.jsx';

const MonthlyLeftContainer = () => {
  return (
    <Styled.LeftContainer>
      <Styled.LeftHeader>
        <LeftMileStone />
        <MonthlyLeftTitle />
        <RightMileStone />
      </Styled.LeftHeader>
    </Styled.LeftContainer>
  );
};

export default MonthlyLeftContainer;
