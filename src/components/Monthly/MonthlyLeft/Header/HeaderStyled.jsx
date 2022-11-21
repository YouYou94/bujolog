import styled from 'styled-components';

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
