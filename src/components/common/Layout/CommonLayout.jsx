import styled from 'styled-components';
import HomeImage from '../../../img/Background/HomeImage.jpg';

export function BackgroundLayout({ children }) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
}

export function DefaultLayout({ children }) {
  return <DefaultContainer>{children}</DefaultContainer>;
}

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-image: url(${HomeImage});
  background-color: rgb(0, 0, 0, 0.65);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DefaultContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;
