import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;

  height: 6rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 5rem;

  @media screen and (max-width: 48rem) {
    padding: 0 1rem;
  }
`;

export const HeaderWrapper = styled.div``;

/* Header Title */
export const HeaderTitle = styled.div`
  font-family: 'Nabla';
  font-size: 3rem;

  cursor: pointer;
`;

/* Header Nav */
export const HeaderNavBar = styled.div`
  display: flex;

  @media screen and (max-width: 48rem) {
    position: absolute;

    width: 12rem;
    height: 6rem;

    display: ${prop => (prop.isToggle === true ? 'flex' : 'none')};
    flex-direction: column;

    top: 4.5rem;
    right: 1rem;

    border: 1px solid black;
    border-radius: 0.2rem;

    background-color: white;
  }
`;

export const HeaderNavItem = styled.div`
  padding: 0 0.5rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    color: gray;
  }

  @media screen and (max-width: 48rem) {
    height: 3rem;

    display: flex;
    align-items: center;

    border-radius: 0.3rem;

    &:hover {
      background-color: rgb(250, 250, 250);
    }
  }
`;

/* Header Toggle */
export const HeaderToggleWrapper = styled.div`
  position: absolute;

  right: 1rem;

  font-size: 1.3rem;

  cursor: pointer;

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;
