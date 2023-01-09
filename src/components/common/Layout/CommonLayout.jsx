import styled from 'styled-components';
import HomeImage from '../../../img/Background/HomeImage.jpg';

export function BackgroundLayout({ children }) {
  return <Background>{children}</Background>;
}

export function DefaultLayout({ children }) {
  return <Default>{children}</Default>;
}

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-image: url(${HomeImage});
  background-color: rgb(0, 0, 0, 0.65);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Default = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
`;
