import styled from 'styled-components';
import { GOAL, TASK } from '../LogContainer';

export const SectionNav = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  font-family: 'CormorantGaramond';
  font-size: 1.7rem;

  text-align: center;

  cursor: pointer;
`;

export const MenuIsTask = styled.div`
  flex: 1;

  ${prop =>
    prop.menuIs === TASK
      ? 'border-top:1px solid rgb(220,220,220); border-left:1px solid rgb(220,220,220); border-right:1px solid rgb(220,220,220); background-color:white;'
      : ''}
`;

export const MenuIsGoal = styled.div`
  flex: 1;

  ${prop =>
    prop.menuIs === GOAL
      ? 'border-top:1px solid rgb(220,220,220); border-left:1px solid rgb(220,220,220); border-right:1px solid rgb(220,220,220); background-color:white;'
      : ''}
`;
