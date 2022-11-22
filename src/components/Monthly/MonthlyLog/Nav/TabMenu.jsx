import { GOAL, TASK } from '../LogContainer.jsx';
import * as Styled from './NavStyled.jsx';

const TabMenu = ({ tap, setTap }) => {
  const showTask = () => setTap(TASK);

  const showGoal = () => setTap(GOAL);

  return (
    <Styled.SectionNav>
      <Styled.MenuIsTask onClick={showTask} menuIs={tap}>
        Task
      </Styled.MenuIsTask>
      <Styled.MenuIsGoal onClick={showGoal} menuIs={tap}>
        Goal
      </Styled.MenuIsGoal>
    </Styled.SectionNav>
  );
};

export default TabMenu;
