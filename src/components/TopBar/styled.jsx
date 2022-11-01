import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 3rem;
`;

/* Contact Styled-Components */
export const TopBarContactContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TopBarContactSite = styled.a`
  margin: 0 0.5rem;

  font-size: 1.3rem;

  text-decoration: none;

  &:visited {
    color: black;
  }
`;

export const TopBarContactEmail = styled.a`
  margin: 0 0.5rem;

  color: black;

  font-size: 1.3rem;

  text-decoration: none;

  &:visited {
    color: black;
  }
`;
