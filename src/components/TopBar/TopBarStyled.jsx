import styled from 'styled-components';

/* Common */
export const Container = styled.div`
  position: relative;

  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;
`;

export const ElementContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 3rem;
`;

/* TopBar Element */
export const Title = styled.h1`
  margin: 0 0.5rem;

  font-family: 'CormorantGaramond';
  font-size: 2rem;

  cursor: pointer;
`;

export const SideMenuBars = styled.div`
  margin: 0 0.5rem;

  font-size: 1.5rem;

  cursor: pointer;
`;

export const LoginButton = styled.button`
  width: 7rem;
  height: 2rem;

  font-family: 'GowunDodum';
`;
