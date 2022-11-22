import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  flex: 1;

  display: flex;

  overflow: hidden;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
