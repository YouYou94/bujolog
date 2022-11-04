import styled from 'styled-components';

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
export const NavButton = styled.div`
  margin-right: 1rem;

  font-size: 1.5rem;

  cursor: pointer;
`;

export const Title = styled.div`
  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  cursor: pointer;
`;

/* Middle Contents */

/* Right Contents */
/* Non Login */
export const RightContentsButton = styled.button`
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
