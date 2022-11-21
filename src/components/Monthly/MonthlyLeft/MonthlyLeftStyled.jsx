import styled from 'styled-components';

export const LeftContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

/* Header */
export const LeftHeader = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 3rem 0 3rem;
  margin-bottom: 2rem;
`;

export const LeftTitle = styled.h1`
  font-family: 'GreatVibes';
  font-size: 3rem;

  text-align: center;
`;

export const MileStone = styled.div`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: rgb(220, 220, 220);
  }
`;
