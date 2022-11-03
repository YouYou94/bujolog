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

/* TopBar Contact Styled-Components */
export const TopBarContactContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const TopBarContactSite = styled.a`
  margin: 0 0.5rem;

  color: black;

  font-size: 1rem;

  text-decoration: none;

  &:visited {
    color: gray;
  }

  &:hover {
    color: black;
  }
`;

export const TopBarContactEmail = styled.a`
  margin: 0 0.5rem;

  color: gray;

  font-size: 1rem;

  text-decoration: none;

  &:visited {
    color: gray;
  }

  &:hover {
    color: black;
  }
`;

/* TopBar Menu Styled-Components */
export const TopBarMenuContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

export const TopBarMenuLogin = styled.div`
  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
