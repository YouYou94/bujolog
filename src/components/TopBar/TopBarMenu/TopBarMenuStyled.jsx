import styled from 'styled-components';

/* TopBar Menu Styled-Components */
export const TopBarMenuContainer = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
`;

/* Non Login */
export const TopBarMenuLogin = styled.div`
  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

/* On Login */
export const TopBarUserMenu = styled.div`
  position: relative;

  font-family: 'GowunDodum';

  cursor: pointer;
`;

export const TopBarUserName = styled.span`
  margin: 0 0.2rem;

  ${TopBarUserMenu}:hover & {
    color: gray;
    text-decoration: underline;
  }
`;

export const TopBarSpan = styled.span`
  margin: 0 0.2rem;
`;

export const TopBarUserMenuBar = styled.div`
  position: absolute;

  width: 8rem;
  height: 4rem;
  right: 0.1rem;

  z-index: 1;

  display: none;

  border: 1px solid gray;

  background-color: white;

  ${TopBarUserMenu}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TopBarUserMenuContent = styled.div`
  height: 2rem;

  display: flex;
  align-items: center;

  padding-left: 0.5rem;

  &:hover {
    background-color: rgb(250, 250, 250);
  }
`;
