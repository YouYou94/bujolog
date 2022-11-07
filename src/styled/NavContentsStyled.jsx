import styled, { keyframes } from 'styled-components';
import blankimage from '../assets/blankprofile.png';

/* Nav Contents */
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

export const NavBar = styled.div`
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

export const NavBarWhiteSpace = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  top: 0;
  left: 0;

  background-color: rgb(0, 0, 0, 0.2);
`;

/* Profile */
export const ProfileContainer = styled.div`
  height: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
`;

export const ProfilePicture = styled.div`
  width: 4rem;
  height: 4rem;

  margin-bottom: 1rem;
  border-radius: 50%;

  background-color: gray;
  background-image: url(${blankimage});
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;
`;

export const ProfileUserName = styled.div`
  margin-bottom: 1rem;

  font-family: 'GowunDodum';
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileButton = styled.button`
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

/* Menu */
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
