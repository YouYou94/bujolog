import styled from 'styled-components';

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
