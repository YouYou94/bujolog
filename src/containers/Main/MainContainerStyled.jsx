import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;

  padding: 0 5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
