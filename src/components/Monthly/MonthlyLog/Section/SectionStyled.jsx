import styled from 'styled-components';

export const SectionContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const SectionTop = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;
`;

export const SectionContents = styled.div`
  flex: 1;

  overflow-y: auto;

  border: 1px solid rgb(220, 220, 220);

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(120, 200, 200);
  }
`;

export const SectionTitle = styled.h1`
  font-family: 'CormorantGaramond';
  font-size: 1.7rem;
`;

export const PlusButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 0.5rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 50%;

  color: rgb(220, 220, 220);

  font-size: 1rem;

  cursor: pointer;

  &:hover {
    color: black;
    border: 1px solid black;
  }
`;
