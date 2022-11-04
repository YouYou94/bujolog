import styled, { keyframes } from 'styled-components';

/* Common TopBar */
export const TopBarContainer = styled.div`
  position: relative;

  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid gray;
`;

export const TopBarContentsContainer = styled.div`
  display: flex;

  margin: 0 2rem;
`;

/* Left Contents */
// 메뉴 버튼
export const TopBarNavButton = styled.div`
  margin-right: 1rem;

  font-size: 1.5rem;

  cursor: pointer;
`;

// 타이틀
export const TopBarTitle = styled.div`
  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  cursor: pointer;
`;

// 메뉴 바
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

export const TopBarNavBar = styled.div`
  position: absolute;

  width: 18rem;
  height: 100vh;

  top: 0;
  left: ${prop => (prop.display === 'open' ? '0' : '-20rem')};

  z-index: 999;

  border-right: 1px solid gray;
  background-color: white;

  animation: ${prop =>
      prop.display === 'open' ? open : prop.display ? close : ''}
    0.8s;
`;

export const TopBarNavBarWhiteSpace = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.2);
`;

/* Middle Contents */

/* Right Contents */
/* Non Login */
export const TopBarLoginButton = styled.button`
  width: 7rem;
  height: 2rem;

  border: 1px solid gray;
  border-radius: 2rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

  color: black;
  background-color: white;

  &:hover {
    color: gray;
  }

  cursor: pointer;
`;

/* On Login */
