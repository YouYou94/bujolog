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
  height: 100%;

  ${prop =>
    prop.menuIs === TASK
      ? 'border-top:2px solid rgb(220,220,220); border-left:2px solid rgb(220,220,220); border-right:2px solid rgb(220,220,220); background-color:white;'
      : 'border-top:1px solid rgb(220,220,220); border-left:1px solid rgb(220,220,220); border-bottom:2px solid rgb(220,220,220);'}

  border-top-left-radius:1rem;
  border-top-right-radius: 1rem;
`;

export const MenuIsGoal = styled.div`
  flex: 1;
  height: 100%;

  ${prop =>
    prop.menuIs === GOAL
      ? 'border-top:2px solid rgb(220,220,220); border-left:2px solid rgb(220,220,220); border-right:2px solid rgb(220,220,220); background-color:white;'
      : 'border-top:1px solid rgb(220,220,220); border-right:1px solid rgb(220,220,220); border-bottom:2px solid rgb(220,220,220);'}

  border-top-left-radius:1rem;
  border-top-right-radius: 1rem;
`;
