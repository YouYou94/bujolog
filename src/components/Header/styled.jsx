import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;

  height: 6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 15rem;

  @media screen and (max-width: 48rem) {
    margin: 0 3rem;
  }
`;

export const HeaderWrapper = styled.div``;

/* Header Title */
export const HeaderTitle = styled.div`
  font-family: 'CormorantGaramond';
  font-size: 3rem;

  cursor: pointer;
`;
