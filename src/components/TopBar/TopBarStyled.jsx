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

export const ContentsContainer = styled.div`
  display: flex;

  margin: 0 2rem;

  @media screen and (max-width: 768px) {
    margin: 0 1rem;
  }
`;

/* Left Contents */
export const MenuIcon = styled.div`
  margin-right: 1rem;

  font-size: 1.5rem;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Title = styled.div`
  font-family: 'CormorantGaramond';
  font-size: 1.5rem;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

/* Middle Contents */

/* Right Contents */
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

  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 1.5rem;

    font-size: 0.7rem;
  }
`;
