import styled, { keyframes } from 'styled-components';

/* Menu Bar */
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

export const MenuBar = styled.div`
  position: absolute;

  width: 18rem;
  height: 100vh;

  top: 0;
  left: ${prop => (prop.display === 'open' ? '0' : '-20rem')};

  z-index: 999;

  display: flex;
  flex-direction: column;

  border-right: 1px solid gray;
  background-color: white;

  animation: ${prop =>
      prop.display === 'open' ? open : prop.display === 'close' ? close : ''}
    0.8s;
`;

export const MenuBarWhiteSpace = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.2);
`;

/*
  Menu Header
*/
export const MenuHeaderContainer = styled.div`
  height: 5rem;
`;

/* 
  Menu Section 
*/
export const MenuSectionContainer = styled.div`
  flex: 1;
`;

/* 
  Menu Footer 
*/
export const MenuFooterContainer = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: column;
`;

// Setting
export const SettingWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Contact
export const ContactWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactSite = styled.a`
  margin: 0 0.5rem;

  color: black;

  font-size: 1rem;

  text-decoration: none;

  &:visited {
    color: gray;
  }

  &:hover {
    color: black;
  }
`;

export const ContactEmail = styled.a`
  margin: 0 0.5rem;

  color: gray;

  font-size: 1rem;

  text-decoration: none;

  &:visited {
    color: gray;
  }

  &:hover {
    color: black;
  }
`;

////
export const MenuContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const emphasis = keyframes`
  from {
    font-size: 1rem;
  } to {
    font-size: 1.1rem;
  }

`;

export const MenuItem = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'GowunDodum';

  cursor: pointer;

  &:hover {
    font-size: 1.1rem;

    background-color: rgb(150, 150, 255, 0.1);

    animation: ${emphasis} 0.3s;
  }
`;

/* Setting */
export const SettingContainer = styled.div`
  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SettingButton = styled.button`
  width: 5rem;
  height: 1.8rem;

  border: 1px solid gray;
  border-radius: 2rem;

  font-family: 'GowunDodum';

  color: black;
  background-color: white;

  &:hover {
    color: gray;
  }

  cursor: pointer;
`;
