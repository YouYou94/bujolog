import styled from 'styled-components';

export const TopBarContainer = styled.div`
  height: 3rem;

  border-bottom: 1px solid black;
  padding: 0 5rem;
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

  color: black;

  font-size: 1.1rem;

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

  font-size: 1.1rem;

  text-decoration: none;

  &:visited {
    color: gray;
  }

  &:hover {
    color: black;
  }
`;
