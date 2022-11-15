import styled, { keyframes } from 'styled-components';

const open = keyframes`
  from {
    left: -20rem;
  } to {
    left: 0;
  }
`;
const close = keyframes`
  from {
    left: 0;
  } to {
    left: -20rem;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;

  width: 20rem;
  height: 100vh;

  top: 0;
  left: ${prop => (prop.display === 'open' ? '0' : '-20rem')};

  z-index: 999;

  display: flex;
  flex-direction: column;

  border-right: 1px solid rgb(220, 220, 220);
  background-color: white;

  animation: ${prop =>
      prop.display === 'open' ? open : prop.display === 'close' ? close : ''}
    0.5s;
`;

export const MenuWhiteSpace = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.2);
`;

export const MenuHeader = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid rgb(220, 220, 220);
`;

export const MenuSection = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  border-bottom: 2px solid rgb(220, 220, 220);
`;

export const MenuFooter = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: column;
`;
