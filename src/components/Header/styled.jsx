import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid black;
  padding: 0 5rem;
`;

export const HeaderWrapper = styled.div``;

/* Header Title */
export const HeaderTitle = styled.div``;

/* Header Nav */
export const HeaderNavBar = styled.div`
  display: flex;
`;

export const HeaderNavItem = styled.div`
  margin: 0 0.5rem;

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
