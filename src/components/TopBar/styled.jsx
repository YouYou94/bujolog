import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 2.5rem;

  display: flex;
  justify-content: space-between;

  margin: 0 15rem;

  @media screen and (max-width: 48rem) {
    margin: 0 3rem;
  }
`;
