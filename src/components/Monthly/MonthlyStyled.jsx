import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-left: 1px solid rgb(204, 204, 204);

  gap: 1rem;
`;

export const ScheduleBox = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 2rem 2rem 0 2rem;

  gap: 0.5rem;
`;

export const ScheduleHeader = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  color: rgb(245, 245, 245);

  gap: 1rem;
`;

export const ScheduleMileStone = styled.label`
  width: 1rem;

  font-family: 'Anton';
  font-size: 3rem;

  cursor: pointer;

  transition: 0.1s all;

  &:hover {
    font-size: 3.3rem;

    color: rgb(180, 200, 185);
  }
`;

export const ScheduleMonth = styled.label`
  width: 5rem;

  font-family: 'Anton';
  font-size: 3rem;

  text-align: center;
`;

export const ScheduleArticle = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  padding: 1rem;

  background-color: rgb(10, 10, 10, 0.5);

  color: rgb(245, 245, 245);
`;
export const Schedule = styled.div`
  display: flex;

  border-bottom: 1px solid rgb(245, 245, 245, 0.2);

  cursor: pointer;

  &:hover {
    background-color: rgb(180, 200, 185, 0.1);
  }
`;

export const ScheduleDate = styled.label`
  width: 2rem;

  font-family: 'Anton';
  font-size: 0.8rem;

  text-align: center;
`;

export const ScheduleDay = styled.label`
  width: 2rem;

  border-left: 1px solid rgb(245, 245, 245, 0.2);
  border-right: 1px solid rgb(245, 245, 245, 0.2);

  font-family: 'Anton';
  font-size: 0.8rem;

  text-align: center;
`;

export const SchedulePlan = styled.label`
  flex: 1;

  padding-left: 1rem;

  font-size: 0.8rem;
`;

/* Modal */
const FadeIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%);
}
to{
  opacity: 1;
  transform: translate(-50%, -50%);
}`;

export const ModalBox = styled.div`
  position: absolute;

  bottom: 0;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 25rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  background-color: rgb(245, 245, 245);

  animation: ${FadeIn} 0.1s ease-in-out;
`;

export const ModalInput = styled.input`
  width: 23rem;
  height: 2rem;

  border: none;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-left: 1rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

  background-color: transparent;

  outline: none;
`;
