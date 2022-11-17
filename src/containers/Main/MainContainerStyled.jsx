import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
