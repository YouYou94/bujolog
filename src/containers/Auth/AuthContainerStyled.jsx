import styled from 'styled-components';

export const Container = styled.div`
  min-width: 30rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-bottom: 15rem;
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${prop => prop.direction || 'column'};
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;
`;