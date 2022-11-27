import styled from 'styled-components';

export const Layout = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;

  box-shadow: 0 -1rem 1.5rem 0;
`;

export const Title = styled.h1`
  font-family: 'CormorantGaramond';

  cursor: pointer;
`;

export const Nav = styled.ul`
  display: flex;
`;

export const Menu = styled.li`
  margin: 0 0.5rem;

  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    color: gray;
  }
`;
