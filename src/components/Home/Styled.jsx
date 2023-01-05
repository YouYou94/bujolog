import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-top: 10rem;

  gap: 3rem;
`;

export const Title = styled.h1`
  font-family: 'GowunDodum';
  font-size: 3rem;
`;

export const Input = styled.input`
  width: 30rem;
  height: 4rem;

  padding: 1rem;
  border: 1px solid rgb(204, 204, 204);

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  outline: none;
`;
